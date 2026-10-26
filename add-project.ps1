# ==============================================================================
# add-project.ps1
# Add a new project from a document and a link with a single command!
#
# Examples:
#   .\add-project.ps1 -Doc "my-notes.md" -Link "https://github.com/Rohitra078/repo"
#   .\add-project.ps1 -Title "Autonomous Drone" -Doc "report.pdf" -Link "https://..." -Cover "drone.jpg"
#   .\add-project.ps1 (Interactive Mode - just run and answer prompts)
# ==============================================================================

param (
  [string]$Doc,
  [string]$Link,
  [string]$Title,
  [string]$Cover,
  [string]$Tags = "Robotics, AI",
  [string]$Category = "robotics",
  [string]$Year = (Get-Date).Year.ToString(),
  [string]$Org = "Independent / Northeastern",
  [string]$Role = "Lead Engineer",
  [switch]$AutoCommit
)

$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   Robotics & AI Portfolio *** Quick Project Importer       " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# Interactive mode if parameters are missing
if (-not $Doc) {
  $Doc = Read-Host "1. Path to Document (Markdown, TXT, or PDF) [Required]"
}

while (-not (Test-Path $Doc)) {
  Write-Warning "File not found: $Doc"
  $Doc = Read-Host "Please enter a valid path to your document"
}

if (-not $Title) {
  # Try to extract first heading from doc if it's text/markdown
  $ext = [IO.Path]::GetExtension($Doc).ToLower()
  if ($ext -in ".md", ".txt") {
    $firstHeading = Get-Content $Doc | Where-Object { $_ -match '^#\s+(.+)$' } | Select-Object -First 1
    if ($firstHeading -match '^#\s+(.+)$') {
      $suggested = $matches[1].Trim()
      $ans = Read-Host "2. Project Title (Press Enter for: '$suggested')"
      $Title = if ($ans) { $ans } else { $suggested }
    }
  }
  if (-not $Title) {
    $defaultTitle = [IO.Path]::GetFileNameWithoutExtension($Doc) -replace '[-_]', ' '
    $Title = Read-Host "2. Project Title (Press Enter for: '$defaultTitle')"
    if (-not $Title) { $Title = $defaultTitle }
  }
}

if (-not $Link) {
  $Link = Read-Host "3. Project Link (GitHub repo, Paper, or Demo URL - optional)"
}

if (-not $Cover) {
  $Cover = Read-Host "4. Cover Image Path (optional, leave blank to pick default)"
}

# Generate clean URL slug
$slug = ($Title.ToLower() -replace '[^a-z0-9]+', '-').Trim('-')
if (-not $slug) { $slug = "project-" + (Get-Date -Format "yyyyMMdd-HHmm") }

Write-Host "`nCreating project entry for: $Title ($slug)..." -ForegroundColor Yellow

# Create assets folder
$projectAssetDir = "assets/projects/$slug"
New-Item -ItemType Directory -Force $projectAssetDir | Out-Null

# Handle Cover image
$coverDest = "assets/img/profile.jpg"
if ($Cover -and (Test-Path $Cover)) {
  $coverFilename = [IO.Path]::GetFileName($Cover)
  $coverDest = "$projectAssetDir/$coverFilename"
  Copy-Item -Path $Cover -Destination $coverDest -Force
  Write-Host "  *** Copied cover image to $coverDest" -ForegroundColor Green
}

# Handle Document content
$docExt = [IO.Path]::GetExtension($Doc).ToLower()
$bodyContent = ""

if ($docExt -eq ".pdf") {
  # Copy PDF to docs directory
  New-Item -ItemType Directory -Force "assets/docs" | Out-Null
  $pdfFilename = [IO.Path]::GetFileName($Doc)
  $pdfDest = "assets/docs/$pdfFilename"
  Copy-Item -Path $Doc -Destination $pdfDest -Force
  Write-Host "  *** Copied PDF to $pdfDest" -ForegroundColor Green

  $bodyContent = @"
## Overview

Full technical documentation and report for **$Title**.

<a href="$pdfDest" target="_blank" class="btn btn-primary">Download Technical Report (PDF)</a>

## Key Highlights

- Autonomous engineering research and development.
- Built for real-time control, perception, and navigation.

> See attached technical documentation for full experimental methods and architectural diagrams.
"@
  if (-not $Link) { $Link = $pdfDest }
} elseif ($docExt -in ".md", ".txt") {
  $rawDoc = Get-Content -Raw -Encoding UTF8 $Doc
  # Strip existing frontmatter if present
  if ($rawDoc -match '(?s)^---\r?\n.*?\r?\n---\r?\n(.*)$') {
    $bodyContent = $matches[1].Trim()
  } else {
    $bodyContent = $rawDoc.Trim()
  }
} else {
  $bodyContent = "## Overview`n`nProject documentation for **$Title**."
}

# Prepare tags list
$tagList = ($Tags -split ',') | ForEach-Object { '"' + $_.Trim() + '"' }
$tagStr = "[" + ($tagList -join ", ") + "]"

# Prepare category list
$catList = ($Category -split ',') | ForEach-Object { '"' + $_.Trim().ToLower() + '"' }
$catStr = "[" + ($catList -join ", ") + "]"

# Prepare links frontmatter
$linksYaml = ""
if ($Link) {
  $linkLabel = if ($Link -like "*github.com*") { "Code on GitHub" } elseif ($Link -like "*.pdf") { "Read Paper (PDF)" } else { "Project Link" }
  $linkIcon = if ($Link -like "*github.com*") { "github" } elseif ($Link -like "*.pdf") { "doc" } else { "link" }
  $linksYaml = @"
links:
  - label: "$linkLabel"
    url: "$Link"
    icon: "$linkIcon"
"@
}

# Assemble final markdown file
$mdFilePath = "content/projects/$slug.md"
$newMarkdown = @"
---
title: "$Title"
slug: "$slug"
year: "$Year"
role: "$Role"
org: "$Org"
category: $catStr
tags: $tagStr
cover: "$coverDest"
size: "md"
$linksYaml
---

$bodyContent
"@

[IO.File]::WriteAllText((Resolve-Path .).Path + "/$mdFilePath", $newMarkdown, [Text.Encoding]::UTF8)
Write-Host "  *** Created project markdown file: $mdFilePath" -ForegroundColor Green

# Automatically compile to js/data.js
Write-Host "Compiling project into portfolio database..." -ForegroundColor Cyan
& powershell -ExecutionPolicy Bypass -File scripts/sync-content.ps1

Write-Host "`n==========================================================" -ForegroundColor Green
Write-Host "**** SUCCESS! Project '$Title' has been added to your site." -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "*** Preview in browser: file:///$((Resolve-Path project.html).Path -replace '\\','/')?id=$slug" -ForegroundColor White
Write-Host "*** To push live to GitHub:" -ForegroundColor White
Write-Host "    git add . ; git commit -m `"Add project: $Title`" ; git push" -ForegroundColor Gray

if ($AutoCommit) {
  & "C:\Program Files\Git\cmd\git.exe" add .
  & "C:\Program Files\Git\cmd\git.exe" commit -m "Add project: $Title"
  Write-Host "  *** Automatically committed to git." -ForegroundColor Green
}

