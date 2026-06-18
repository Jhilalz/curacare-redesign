/* ============================================================
   CuraCare — Interaction & motion layer (GSAP + ScrollTrigger)
   Loader · custom cursor · sticky header · split-text hero ·
   scroll reveals · marquee · parallax · counters · tilt · form
   ============================================================ */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof gsap !== "undefined";
  if (hasGSAP && typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);

  /* ---------- Loader ---------- */
  const loader = document.querySelector("[data-loader]");
  const loaderBar = document.querySelector("[data-loader-bar]");
  function finishLoad() {
    if (!loader) return;
    if (hasGSAP && !reduce) {
      gsap.to(loaderBar, { width: "100%", duration: 0.7, ease: "power2.inOut", onComplete: () => {
        loader.classList.add("is-done");
        playIntro();
      }});
    } else {
      loader.style.display = "none";
      playIntro();
    }
  }
  window.addEventListener("load", finishLoad);
  // Safety net if load fires slow
  setTimeout(finishLoad, 2600);

  /* ---------- Hero intro (split-text rise) ---------- */
  let introPlayed = false;
  function playIntro() {
    if (introPlayed) return; introPlayed = true;
    if (!hasGSAP || reduce) {
      document.querySelectorAll("[data-split],[data-reveal]").forEach(e => e.classList.add("is-revealed"));
      return;
    }
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from("[data-split]", { yPercent: 110, duration: 1.1, stagger: 0.12 })
      .from(".hero__kicker", { y: 20, opacity: 0, duration: 0.7 }, "-=0.7")
      .from(".hero__lead", { y: 24, opacity: 0, duration: 0.7 }, "-=0.6")
      .from(".hero__cta", { y: 24, opacity: 0, duration: 0.7 }, "-=0.55")
      .from(".hero__visual .hcard", { y: 40, opacity: 0, scale: 0.94, duration: 0.9, stagger: 0.12 }, "-=0.7");
    // reveal the hero reveal items (override base hidden state)
    document.querySelectorAll(".hero [data-reveal]").forEach(e => e.classList.add("is-revealed"));
  }

  /* ---------- Custom cursor ---------- */
  const cursor = document.querySelector("[data-cursor]");
  if (cursor && !reduce && matchMedia("(hover: hover)").matches) {
    const dot = cursor.querySelector(".cursor__dot");
    const ring = cursor.querySelector(".cursor__ring");
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener("pointermove", (e) => { mx = e.clientX; my = e.clientY; dot.style.left = mx + "px"; dot.style.top = my + "px"; });
    (function ring_loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      requestAnimationFrame(ring_loop);
    })();
    document.querySelectorAll("a, button, [data-cursor-grow], input, textarea").forEach((el) => {
      el.addEventListener("pointerenter", () => cursor.classList.add("is-grow"));
      el.addEventListener("pointerleave", () => cursor.classList.remove("is-grow"));
    });
  } else if (cursor) { cursor.style.display = "none"; }

  /* ---------- Sticky header + scroll progress ---------- */
  const header = document.querySelector("[data-header]");
  const progress = document.querySelector("[data-progress]");
  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 40);
    if (progress) {
      const h = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  const burger = document.querySelector("[data-burger]");
  const nav = document.querySelector("[data-nav]");
  if (burger && nav) {
    const toggle = (force) => {
      const open = force !== undefined ? force : !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      burger.classList.toggle("is-open", open);
    };
    burger.addEventListener("click", () => toggle());
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggle(false)));
  }

  /* ---------- Scroll reveals ---------- */
  const STAGGER_GRIDS = ".values, .news__grid, .perks, .about__stats, .acc-list, .locs";

  function revealOne(el) {
    if (el.dataset.revealBound) return;
    el.dataset.revealBound = "1";
    gsap.fromTo(el, { y: 36, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.95, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
      onStart: () => el.classList.add("is-revealed")
    });
  }

  function bindReveals(scope) {
    const root = scope || document;
    if (!hasGSAP || reduce) {
      root.querySelectorAll("[data-reveal]").forEach(e => e.classList.add("is-revealed"));
      return;
    }
    root.querySelectorAll("[data-reveal]").forEach((el) => {
      if (el.closest(".hero")) return; // hero handled by intro
      if (el.parentElement && el.parentElement.matches(STAGGER_GRIDS)) return; // handled by grid stagger
      revealOne(el);
    });
    root.querySelectorAll(STAGGER_GRIDS).forEach((grid) => {
      if (grid.dataset.revealBound) return;
      grid.dataset.revealBound = "1";
      const kids = grid.children;
      gsap.fromTo(kids, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.09,
        scrollTrigger: { trigger: grid, start: "top 84%" },
        onStart: () => Array.from(kids).forEach(k => k.classList.add("is-revealed"))
      });
    });
  }

  bindReveals(document);
  // Re-bind after i18n re-renders services/news (and on first language apply)
  document.addEventListener("curacare:langchange", () => {
    requestAnimationFrame(() => bindReveals(document));
  });

  /* ---------- Marquee loop ---------- */
  const marquee = document.querySelector("[data-marquee]");
  if (marquee && hasGSAP && !reduce) {
    const clone = marquee.innerHTML; marquee.innerHTML += clone; // seamless
    gsap.to(marquee, { xPercent: -50, repeat: -1, duration: 22, ease: "none" });
  }

  /* ---------- Parallax (break image + hero glow) ---------- */
  if (hasGSAP && !reduce) {
    const breakImg = document.querySelector("[data-parallax]");
    if (breakImg) {
      gsap.fromTo(breakImg, { yPercent: -8 }, {
        yPercent: 8, ease: "none",
        scrollTrigger: { trigger: ".break", start: "top bottom", end: "bottom top", scrub: true }
      });
    }
    // process connector line draw
    const pline = document.querySelector("[data-process-line]");
    if (pline) {
      gsap.fromTo(pline, { width: "0%" }, {
        width: "100%", ease: "none",
        scrollTrigger: { trigger: ".process", start: "top 70%", end: "bottom 70%", scrub: true }
      });
    }
  }

  /* ---------- Animated counters ---------- */
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = parseFloat(el.getAttribute("data-count"));
    const run = () => {
      if (!hasGSAP || reduce) { el.textContent = target; return; }
      const obj = { v: 0 };
      gsap.to(obj, { v: target, duration: 1.6, ease: "power2.out",
        onUpdate: () => { el.textContent = Math.round(obj.v); } });
    };
    if (typeof ScrollTrigger !== "undefined" && hasGSAP) {
      ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: run });
    } else { run(); }
  });

  /* ---------- 3D tilt on cards/media ---------- */
  if (!reduce && matchMedia("(hover: hover)").matches) {
    document.querySelectorAll("[data-tilt]").forEach((el) => {
      const strength = 8;
      el.style.transformStyle = "preserve-3d";
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        if (hasGSAP) gsap.to(el, { rotateY: px * strength, rotateX: -py * strength, transformPerspective: 900, duration: 0.5, ease: "power2.out" });
      });
      el.addEventListener("pointerleave", () => { if (hasGSAP) gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.7, ease: "power3.out" }); });
    });
  }

  /* ---------- Magnetic buttons ---------- */
  if (!reduce && hasGSAP && matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".btn--solid, .btn--light").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.4 });
      });
      btn.addEventListener("pointerleave", () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" }));
    });
  }

  /* ---------- Contact form (demo, no backend) ---------- */
  const form = document.querySelector("[data-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = document.querySelector("[data-form-success]");
      if (ok) ok.classList.add("is-visible");
      form.reset();
      if (hasGSAP && !reduce) gsap.fromTo(ok, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
    });
  }

  /* ---------- Leistungs-Akkordeon (Toggle via Delegation) ---------- */
  const accHost = document.querySelector("[data-services]");
  if (accHost) {
    const setHeight = (acc, open) => {
      const panel = acc.querySelector(".acc__panel");
      if (!panel) return;
      const inner = panel.firstElementChild;
      panel.style.height = open ? inner.offsetHeight + "px" : "0px";
    };
    accHost.addEventListener("click", (e) => {
      const head = e.target.closest(".acc__head");
      if (!head || !accHost.contains(head)) return;
      const acc = head.closest(".acc");
      const open = !acc.classList.contains("is-open");
      acc.classList.toggle("is-open", open);
      head.setAttribute("aria-expanded", String(open));
      setHeight(acc, open);
      if (typeof ScrollTrigger !== "undefined") setTimeout(() => ScrollTrigger.refresh(), 520);
    });
    // Re-measure open panels on resize / after re-render
    const remeasure = () => accHost.querySelectorAll(".acc.is-open").forEach(a => setHeight(a, true));
    addEventListener("resize", remeasure, { passive: true });
    document.addEventListener("curacare:langchange", () => requestAnimationFrame(remeasure));
  }
})();
