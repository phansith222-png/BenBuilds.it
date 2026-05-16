/* Custom magnetic cursor + works-list floating image preview
   Disabled on touch / coarse pointers.
   ============================================================= */

(function () {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(pointer: coarse)").matches) return;

  // -------- Build cursor DOM --------
  const root = document.createElement("div");
  root.className = "cursor-root";
  root.setAttribute("aria-hidden", "true");
  root.innerHTML = `
    <div class="cursor-ring"></div>
    <div class="cursor-dot"></div>
    <div class="cursor-pill"><span>VIEW</span></div>
  `;
  document.documentElement.classList.add("has-custom-cursor");
  document.body.appendChild(root);

  const ring = root.querySelector(".cursor-ring");
  const dot  = root.querySelector(".cursor-dot");
  const pill = root.querySelector(".cursor-pill");

  // -------- Works floater (a single floating image) --------
  const floater = document.createElement("div");
  floater.className = "works-floater";
  floater.setAttribute("aria-hidden", "true");
  floater.innerHTML = `<img alt=""/>`;
  document.body.appendChild(floater);
  const floaterImg = floater.querySelector("img");

  // -------- State --------
  const target  = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const ringPos = { x: target.x, y: target.y };
  const dotPos  = { x: target.x, y: target.y };
  const floaterPos = { x: target.x, y: target.y };
  let magnetEl = null; // currently magnetised element
  let hoverMode = "default"; // "default" | "hover" | "view"
  let floaterShown = false;
  let floaterRotation = 0;

  // -------- Listeners --------
  window.addEventListener("mousemove", (e) => {
    target.x = e.clientX; target.y = e.clientY;
    if (!started) start();
  });
  window.addEventListener("mouseleave", () => { root.classList.add("away"); });
  window.addEventListener("mouseenter", () => { root.classList.remove("away"); });
  document.addEventListener("mousedown", () => root.classList.add("pressed"));
  document.addEventListener("mouseup",   () => root.classList.remove("pressed"));

  // Delegated hover for interactive selectors + work rows
  const HOVER_SEL = 'a, button, [data-cursor], [role="button"], input, textarea, .work-row, .channel, .nav-link, .util-link';
  const VIEW_SEL  = '.work-row';
  document.addEventListener("mouseover", (e) => {
    const view = e.target.closest(VIEW_SEL);
    const hover = e.target.closest(HOVER_SEL);
    if (view) {
      setMode("view");
      const cover = view.getAttribute("data-cover");
      if (cover) showFloater(cover);
      magnetEl = view;
    } else if (hover) {
      setMode("hover");
      magnetEl = hover;
    } else {
      setMode("default");
      magnetEl = null;
      hideFloater();
    }
  });

  // -------- Animation loop --------
  let started = false;
  function start() {
    started = true;
    requestAnimationFrame(tick);
  }
  function tick() {
    // Target position — magnetise toward element center when close
    let tx = target.x, ty = target.y;
    if (magnetEl && hoverMode !== "default") {
      const r = magnetEl.getBoundingClientRect();
      // Only magnetise small elements (buttons/links), not big rows
      const isSmall = r.width < 220 && r.height < 80;
      if (isSmall) {
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = cx - target.x;
        const dy = cy - target.y;
        const dist = Math.hypot(dx, dy);
        const pull = Math.max(0, 1 - dist / 90);
        tx = target.x + dx * pull * 0.35;
        ty = target.y + dy * pull * 0.35;
        // Also nudge the element itself (magnetic button)
        magnetEl.style.setProperty("--mag-x", `${dx * pull * -0.18}px`);
        magnetEl.style.setProperty("--mag-y", `${dy * pull * -0.18}px`);
      }
    }
    // Clear stale magnet on whoever was last pulled
    if (lastMagnet && lastMagnet !== magnetEl) {
      lastMagnet.style.setProperty("--mag-x", "0px");
      lastMagnet.style.setProperty("--mag-y", "0px");
    }
    lastMagnet = magnetEl;

    // Lerp
    dotPos.x  += (tx - dotPos.x)  * 0.55;
    dotPos.y  += (ty - dotPos.y)  * 0.55;
    ringPos.x += (tx - ringPos.x) * 0.18;
    ringPos.y += (ty - ringPos.y) * 0.18;
    floaterPos.x += (target.x - floaterPos.x) * 0.10;
    floaterPos.y += (target.y - floaterPos.y) * 0.10;

    dot.style.transform  = `translate3d(${dotPos.x}px,  ${dotPos.y}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
    pill.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
    floater.style.transform = `translate3d(${floaterPos.x + 40}px, ${floaterPos.y - 40}px, 0) rotate(${floaterRotation}deg)`;

    requestAnimationFrame(tick);
  }
  let lastMagnet = null;

  function setMode(mode) {
    if (hoverMode === mode) return;
    hoverMode = mode;
    root.classList.remove("is-hover", "is-view");
    if (mode === "hover") root.classList.add("is-hover");
    if (mode === "view")  root.classList.add("is-view");
  }

  function showFloater(src) {
    if (floaterShown && floaterImg.getAttribute("src") === src) return;
    if (floaterImg.getAttribute("src") !== src) {
      floaterImg.setAttribute("src", src);
    }
    // Random gentle rotation per show
    floaterRotation = (Math.random() * 6) - 3;
    floater.classList.add("on");
    floaterShown = true;
  }
  function hideFloater() {
    if (!floaterShown) return;
    floater.classList.remove("on");
    floaterShown = false;
  }
})();
