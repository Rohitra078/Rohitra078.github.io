/**
 * Rohit Hiraman Rajput — Portfolio Engine
 * LiDAR Canvas, Bento Cards, Lightbox, Dynamic Project Views
 */

(function () {
  "use strict";

  // Cache DOM
  const nav = document.querySelector(".nav");
  const menuBtn = document.querySelector(".menu-btn");
  const bentoGrid = document.getElementById("bento-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const canvas = document.getElementById("lidar-canvas");
  const roleTyped = document.querySelector(".hero-role .typed");
  const copyBtn = document.getElementById("copy-email-btn");
  const copyToast = document.getElementById("copy-toast");

  /* -------------------------------------------------------------
     1. Interactive LiDAR Point Cloud Canvas (Hero)
     ------------------------------------------------------------- */
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0, isHover: false };
    const NUM_POINTS = 380;

    function resize() {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initPoints();
    }

    function initPoints() {
      particles = [];
      // Generate a simulated LiDAR sweep with ring layers (like Velodyne / Ouster)
      const numRings = 14;
      for (let r = 1; r <= numRings; r++) {
        const radius = (r / numRings) * Math.min(width, height) * 0.55;
        const ptsInRing = Math.floor(18 + r * 3.5);
        for (let i = 0; i < ptsInRing; i++) {
          const angle = (i / ptsInRing) * Math.PI * 2;
          const noise = (Math.random() - 0.5) * 18;
          const zDepth = (r / numRings) * 1.8 + Math.random() * 0.3;
          particles.push({
            origAngle: angle,
            origRadius: radius + noise,
            baseZ: zDepth,
            x: 0,
            y: 0,
            z: zDepth,
            size: Math.random() * 2 + 1.2,
            ring: r,
          });
        }
      }
    }

    let angleOffset = 0;
    function renderCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const centerX = width * 0.65 + (mouse.x - width / 2) * 0.12;
      const centerY = height * 0.52 + (mouse.y - height / 2) * 0.12;

      angleOffset += 0.0035;

      // Draw faint concentric range rings (like LiDAR RViz display)
      ctx.strokeStyle = "rgba(34, 211, 238, 0.04)";
      ctx.lineWidth = 1;
      for (let ring = 1; ring <= 5; ring++) {
        ctx.beginPath();
        const r = (ring / 5) * Math.min(width, height) * 0.5;
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw rotating scanner sweep beam
      ctx.save();
      ctx.translate(centerX, centerY);
      const sweepGradient = ctx.createConicGradient(angleOffset, 0, 0);
      sweepGradient.addColorStop(0, "rgba(34, 211, 238, 0.15)");
      sweepGradient.addColorStop(0.12, "rgba(167, 139, 250, 0.05)");
      sweepGradient.addColorStop(0.25, "transparent");
      sweepGradient.addColorStop(1, "transparent");
      ctx.fillStyle = sweepGradient;
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.58, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Render 3D point cloud with LiDAR elevation pseudo-color
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const rotAngle = p.origAngle + angleOffset * 0.6;
        const tiltY = Math.sin(rotAngle) * (mouse.y / height - 0.5) * 40;

        const px = centerX + Math.cos(rotAngle) * p.origRadius;
        const py = centerY + Math.sin(rotAngle) * (p.origRadius * 0.55) + tiltY;

        p.x = px;
        p.y = py;

        // LiDAR colormap calculation (Jet / Turbo: Blue -> Cyan -> Green -> Yellow -> Red)
        const normZ = p.origRadius / (Math.min(width, height) * 0.55);
        let col;
        if (normZ < 0.25) col = "rgba(59, 130, 246, "; // blue
        else if (normZ < 0.5) col = "rgba(34, 211, 238, "; // cyan
        else if (normZ < 0.75) col = "rgba(163, 230, 53, "; // lime
        else col = "rgba(251, 191, 36, "; // amber

        // Interactive mouse proximity bloom
        const dx = px - mouse.x;
        const dy = py - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let alpha = 0.55;
        let radiusBoost = 0;

        if (dist < 140) {
          const proximity = 1 - dist / 140;
          alpha += proximity * 0.45;
          radiusBoost = proximity * 2;
        }

        ctx.fillStyle = col + alpha + ")";
        ctx.beginPath();
        ctx.arc(px, py, p.size + radiusBoost, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(renderCanvas);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHover = true;
    });

    resize();
    renderCanvas();
  }

  /* -------------------------------------------------------------
     2. Hero Typewriter for Specializations
     ------------------------------------------------------------- */
  if (roleTyped && typeof PROFILE !== "undefined" && PROFILE.roles) {
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const roles = PROFILE.roles;

    function type() {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        roleTyped.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
      } else {
        roleTyped.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
      }

      let speed = isDeleting ? 30 : 65;

      if (!isDeleting && charIdx === currentRole.length) {
        speed = 2200; // pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 400;
      }

      setTimeout(type, speed);
    }
    type();
  }

  /* -------------------------------------------------------------
     3. Populate Bento Grid from data.js
     ------------------------------------------------------------- */
  if (bentoGrid && typeof PROJECTS !== "undefined") {
    bentoGrid.innerHTML = "";

    PROJECTS.forEach((p, idx) => {
      const card = document.createElement("a");
      card.href = `project.html?id=${encodeURIComponent(p.slug)}`;
      card.className = `card ${p.size || ""} reveal reveal-d${(idx % 3) + 1}`;
      card.dataset.category = (p.category || []).join(" ");

      const tagsHtml = (p.tags || [])
        .slice(0, 3)
        .map((t) => `<span class="chip">${t}</span>`)
        .join("");

      card.innerHTML = `
        <span class="card-year mono">${p.year}</span>
        <div class="card-arrow" aria-label="Open project details">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <div class="card-media">
          <img src="${p.cover}" alt="${p.title}" loading="lazy">
          ${p.coverVideo ? `<video muted loop playsinline preload="none"><source src="${p.coverVideo}" type="video/mp4"></video>` : ""}
        </div>
        <div class="card-body">
          <div class="card-meta">
            ${tagsHtml}
          </div>
          <h3>${p.title}</h3>
          <p>${p.short}</p>
        </div>
      `;

      // Video hover play on desktop
      if (p.coverVideo) {
        const video = card.querySelector("video");
        card.addEventListener("mouseenter", () => {
          card.classList.add("playing");
          if (video) video.play().catch(() => {});
        });
        card.addEventListener("mouseleave", () => {
          card.classList.remove("playing");
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        });
      }

      // Dynamic cursor spotlight positioning per card
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });

      bentoGrid.appendChild(card);
    });

    // Add "Future / In Progress" ghost card
    const ghost = document.createElement("div");
    ghost.className = "card ghost-card reveal";
    ghost.innerHTML = `
      <div class="pulse"></div>
      <span class="eyebrow" style="margin-bottom: .6rem">Next Up</span>
      <h3>New Autonomous Projects Coming Soon</h3>
      <p style="color: var(--text-dim); margin-top: .4rem">
        Currently researching scalable perception models, multi-agent robotics, and real-time vision-language-action (VLA) controllers.
      </p>
    `;
    bentoGrid.appendChild(ghost);
  }

  /* -------------------------------------------------------------
     4. Category Filter Tabs
     ------------------------------------------------------------- */
  if (filterBtns.length && bentoGrid) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;

        const cards = bentoGrid.querySelectorAll(".card");
        cards.forEach((c) => {
          if (c.classList.contains("ghost-card")) return;
          const cat = c.dataset.category || "";
          if (filter === "all" || cat.includes(filter)) {
            c.classList.remove("hide");
          } else {
            c.classList.add("hide");
          }
        });
      });
    });
  }

  /* -------------------------------------------------------------
     5. Scroll Listeners (Navbar blur, reveal on scroll, active spy)
     ------------------------------------------------------------- */
  function onScroll() {
    if (nav) {
      if (window.scrollY > 40) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }

    // Scroll spy for navigation links
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 120;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });

    // Reveal elements on view
    const reveals = document.querySelectorAll(".reveal:not(.in)");
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.88) {
        el.classList.add("in");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("DOMContentLoaded", onScroll);
  setTimeout(onScroll, 200);

  /* -------------------------------------------------------------
     6. Mobile Navigation Menu Toggle
     ------------------------------------------------------------- */
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
    });
    // Close on navigation link click
    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
      });
    });
  }

  /* -------------------------------------------------------------
     7. Copy Email with Toast Feedback
     ------------------------------------------------------------- */
  if (copyBtn && typeof PROFILE !== "undefined") {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard
        .writeText(PROFILE.email)
        .then(() => {
          if (copyToast) {
            copyToast.textContent = "✓ Email copied to clipboard: " + PROFILE.email;
            setTimeout(() => {
              copyToast.textContent = "";
            }, 3500);
          }
        })
        .catch(() => {
          window.location.href = `mailto:${PROFILE.email}`;
        });
    });
  }

  /* -------------------------------------------------------------
     8. Lightbox Zoom for Architecture Diagrams & Charts
     ------------------------------------------------------------- */
  let lightbox = document.querySelector(".lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `<img>`;
    document.body.appendChild(lightbox);
  }

  const lbImg = lightbox.querySelector("img");
  document.addEventListener("click", (e) => {
    if (e.target.matches(".prose figure img, .p-cover img")) {
      lbImg.src = e.target.src;
      lightbox.classList.add("open");
    } else if (lightbox.classList.contains("open")) {
      lightbox.classList.remove("open");
    }
  });

  /* -------------------------------------------------------------
     9. Lite YouTube Click-to-Load Embeds
     ------------------------------------------------------------- */
  document.addEventListener("click", (e) => {
    const ytCard = e.target.closest(".yt");
    if (ytCard && !ytCard.querySelector("iframe")) {
      const vidId = ytCard.dataset.id;
      if (vidId) {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube-nocookie.com/embed/${vidId}?autoplay=1&rel=0`;
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        ytCard.innerHTML = "";
        ytCard.appendChild(iframe);
      }
    }
  });

  /* -------------------------------------------------------------
     10. Subtle Global Mouse Glow
     ------------------------------------------------------------- */
  const glow = document.querySelector(".cursor-glow");
  if (glow) {
    window.addEventListener(
      "mousemove",
      (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      },
      { passive: true }
    );
  }
})();
