# ==============================================================================
# sync-content.ps1
# Compiles Markdown files from content/projects/*.md into js/data.js
# ==============================================================================
param (
  [string]$ContentDir = "content/projects",
  [string]$OutputFile = "js/data.js"
)

$ErrorActionPreference = "Stop"

function Parse-FrontmatterAndBody($filePath) {
  $raw = Get-Content -Raw -Encoding UTF8 $filePath
  $meta = @{}
  $bodyText = $raw

  if ($raw -match '(?s)^---\r?\n(.*?)\r?\n---\r?\n(.*)$') {
    $yamlBlock = $matches[1]
    $bodyText = $matches[2]

    # Simple YAML key-value / list parser
    $lines = $yamlBlock -split "\r?\n"
    $currentKey = $null
    $currentList = $null
    $inDictList = $false
    $currentDict = $null

    foreach ($line in $lines) {
      if ([string]::IsNullOrWhiteSpace($line) -or $line.Trim().StartsWith("#")) { continue }

      # Handle dictionary list item e.g. "  - label: '...'"
      if ($line -match '^\s*-\s+([a-zA-Z0-9_]+)\s*:\s*(.*)$') {
        $subKey = $matches[1]
        $subVal = $matches[2].Trim('"', "'", ' ')
        $currentDict = [ordered]@{}
        $currentDict[$subKey] = $subVal
        if ($currentList -ne $null) { $currentList += $currentDict }
        continue
      }
      if ($line -match '^\s+([a-zA-Z0-9_]+)\s*:\s*(.*)$' -and $currentDict -ne $null) {
        $subKey = $matches[1]
        $subVal = $matches[2].Trim('"', "'", ' ')
        $currentDict[$subKey] = $subVal
        continue
      }

      # Handle simple list item e.g. "  - item"
      if ($line -match '^\s*-\s+(.*)$') {
        $val = $matches[1].Trim('"', "'", ' ')
        if ($currentList -ne $null) { $currentList += $val }
        continue
      }

      # Handle key: value or key: [a, b]
      if ($line -match '^([a-zA-Z0-9_]+)\s*:\s*(.*)$') {
        $key = $matches[1]
        $val = $matches[2].Trim()

        if ($val.StartsWith("[") -and $val.EndsWith("]")) {
          $items = $val.Trim('[]') -split ',' | ForEach-Object { $_.Trim('"', "'", ' ') } | Where-Object { $_ -ne "" }
          $meta[$key] = @($items)
          $currentKey = $null
          $currentList = $null
        } elseif ($val -eq "") {
          $currentKey = $key
          $currentList = @()
          $meta[$key] = $currentList
          $currentDict = $null
        } else {
          $meta[$key] = $val.Trim('"', "'")
          $currentKey = $null
          $currentList = $null
        }
      }
    }
  }

  return @{
    Meta = $meta
    Body = $bodyText.Trim()
  }
}

function Convert-MarkdownToBlocks($mdText) {
  $blocks = @()
  $lines = $mdText -split "\r?\n"
  $i = 0

  while ($i -lt $lines.Length) {
    $line = $lines[$i]
    $trimmed = $line.Trim()

    if ([string]::IsNullOrWhiteSpace($trimmed)) {
      $i++
      continue
    }

    # Headings: ## Heading or ### Heading
    if ($trimmed -match '^#{2,3}\s+(.+)$') {
      $blocks += [ordered]@{ type = "h"; text = $matches[1] }
      $i++
      continue
    }

    # Custom Video tag: <video src="..." caption="..."></video>
    if ($trimmed -match '<video\s+src=["'']([^"'']+)["''](?:\s+caption=["'']([^"'']*)["''])?') {
      $blocks += [ordered]@{ type = "video"; src = $matches[1]; caption = $matches[2] }
      $i++
      continue
    }

    # Custom YouTube tag: <youtube id="..." caption="..."></youtube>
    if ($trimmed -match '<youtube\s+id=["'']([^"'']+)["''](?:\s+caption=["'']([^"'']*)["''])?') {
      $blocks += [ordered]@{ type = "youtube"; id = $matches[1]; caption = $matches[2] }
      $i++
      continue
    }

    # Image: ![Caption](src){light} or ![Caption](src)
    if ($trimmed -match '^!\[(.*?)\]\((.*?)\)(?:\{(light)\})?$') {
      $caption = $matches[1]
      $src = $matches[2]
      $isLight = ($matches[3] -eq "light")
      $block = [ordered]@{ type = "img"; src = $src; caption = $caption }
      if ($isLight) { $block["light"] = $true }
      $blocks += $block
      $i++
      continue
    }

    # Callout: > Quote / callout
    if ($trimmed -match '^>\s+(.+)$') {
      $calloutLines = @($matches[1])
      $i++
      while ($i -lt $lines.Length -and $lines[$i].Trim().StartsWith(">")) {
        $calloutLines += $lines[$i].Trim().Substring(1).Trim()
        $i++
      }
      $blocks += [ordered]@{ type = "callout"; text = ($calloutLines -join " ") }
      continue
    }

    # Unordered list: - item or * item
    if ($trimmed -match '^[\-\*]\s+(.+)$') {
      $items = @($matches[1])
      $i++
      while ($i -lt $lines.Length -and ($lines[$i].Trim() -match '^[\-\*]\s+(.+)$')) {
        $items += $matches[1]
        $i++
      }
      $blocks += [ordered]@{ type = "list"; items = $items }
      continue
    }

    # Normal paragraph: accumulate until empty line
    $pLines = @($line)
    $i++
    while ($i -lt $lines.Length -and -not [string]::IsNullOrWhiteSpace($lines[$i].Trim()) -and -not ($lines[$i].Trim() -match '^(?:#{2,3}|[\-\*]\s|>|!\[|<video|<youtube)')) {
      $pLines += $lines[$i]
      $i++
    }
    # Markdown inline formatting (bold, links)
    $pText = $pLines -join " "
    $pText = [regex]::Replace($pText, '\*\*(.+?)\*\*', '<strong>$1</strong>')
    $pText = [regex]::Replace($pText, '\[(.+?)\]\((.+?)\)', '<a href="$2" target="_blank" rel="noopener">$1</a>')
    $blocks += [ordered]@{ type = "p"; text = $pText }
  }

  return $blocks
}

Write-Host "Scanning $ContentDir for project markdown files..." -ForegroundColor Cyan
$mdFiles = Get-ChildItem -Path $ContentDir -Filter "*.md" | Sort-Object Name

# Ensure M4 is first if sorting
$orderedFiles = @()
$m4 = $mdFiles | Where-Object { $_.Name -like "*m4*" }
$others = $mdFiles | Where-Object { $_.Name -notlike "*m4*" }
$orderedFiles += $m4
$orderedFiles += $others

$projectsList = @()

foreach ($file in $orderedFiles) {
  Write-Host "  -> Parsing $($file.Name)" -ForegroundColor Green
  $parsed = Parse-FrontmatterAndBody $file.FullName
  $meta = $parsed.Meta
  $blocks = Convert-MarkdownToBlocks $parsed.Body

  # Merge any top-level metrics defined in frontmatter
  if ($meta.ContainsKey("metrics") -and $meta["metrics"] -is [array] -and $meta["metrics"].Count -gt 0) {
    # Check if metrics block already exists in body
    $hasMetrics = $blocks | Where-Object { $_.type -eq "metrics" }
    if (-not $hasMetrics) {
      $metricBlock = [ordered]@{ type = "metrics"; items = $meta["metrics"] }
      # insert after first paragraph
      if ($blocks.Count -gt 1) {
        $newBlocks = @()
        $inserted = $false
        foreach ($b in $blocks) {
          $newBlocks += $b
          if ($b.type -eq "p" -and -not $inserted) {
            $newBlocks += $metricBlock
            $inserted = $true
          }
        }
        $blocks = $newBlocks
      } else {
        $blocks += $metricBlock
      }
    }
  }

  $pObj = [ordered]@{
    slug       = if ($meta["slug"]) { $meta["slug"] } else { $file.BaseName }
    title      = $meta["title"]
    short      = if ($meta["short"]) { $meta["short"] } else { ($blocks | Where-Object { $_.type -eq "p" } | Select-Object -First 1).text }
    year       = if ($meta["year"]) { $meta["year"] } else { "2026" }
    role       = if ($meta["role"]) { $meta["role"] } else { "Robotics Engineer" }
    org        = if ($meta["org"]) { $meta["org"] } else { "Northeastern University" }
    category   = if ($meta["category"]) { $meta["category"] } else { @("robotics") }
    tags       = if ($meta["tags"]) { $meta["tags"] } else { @("Robotics", "AI") }
    cover      = if ($meta["cover"]) { $meta["cover"] } else { "assets/img/profile.jpg" }
    coverVideo = $meta["coverVideo"]
    size       = if ($meta["size"]) { $meta["size"] } else { "md" }
    links      = if ($meta["links"]) { $meta["links"] } else { @() }
    body       = $blocks
  }
  $projectsList += $pObj
}

# Preserve existing PROFILE, EXPERIENCE, SKILLS, CATEGORIES from data.js
$existingData = Get-Content -Raw -Encoding UTF8 $OutputFile
$prefix = ""
if ($existingData -match '(?s)(.*?)(?=const PROJECTS\s*=)') {
  $prefix = $matches[1]
} else {
  Write-Warning "Could not find existing PROFILE header. Using standard header."
}

$projectsJson = ConvertTo-Json -InputObject $projectsList -Depth 10

$footer = "`n`nconst CATEGORIES = [`n  { id: 'all', label: 'All' },`n  { id: 'robotics', label: 'Robotics' },`n  { id: 'perception', label: 'Perception' },`n  { id: 'ai', label: 'AI / ML' },`n  { id: 'research', label: 'Research' }`n];`n"

$finalContent = $prefix + "const PROJECTS = " + $projectsJson + ";" + $footer
[IO.File]::WriteAllText((Resolve-Path $OutputFile).Path, $finalContent, [Text.Encoding]::UTF8)

Write-Host "[OK] Successfully compiled $($projectsList.Count) projects into $OutputFile" -ForegroundColor Green
