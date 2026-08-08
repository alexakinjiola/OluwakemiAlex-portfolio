/* =============================================================
   OLUWAKEMI MARY ALEX — shared interactions & motion
   Dependency-free, accessible, performance-minded.
   Motion uses transform/opacity only and fully respects
   prefers-reduced-motion. Custom cursor + magnetic effects
   run only on fine-pointer (mouse) devices.
   ============================================================= */
(function () {
  "use strict";

  var docEl = document.documentElement;
  docEl.classList.remove("no-js");

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var canAnimate = !reduce;

  /* ---- 1. Header state + scroll-progress + parallax ----------------- */
  var header = document.querySelector(".site-header");

  var progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);

  var parallaxEls = [];
  if (canAnimate) {
    var pNodes = document.querySelectorAll("[data-parallax]");
    for (var i = 0; i < pNodes.length; i++) {
      pNodes[i]._pSpeed = parseFloat(pNodes[i].getAttribute("data-parallax")) || 0.05;
      parallaxEls.push(pNodes[i]);
    }
  }

  var ticking = false;
  function onScrollFrame() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 24);

    var h = docEl.scrollHeight - docEl.clientHeight;
    progress.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";

    for (var i = 0; i < parallaxEls.length; i++) {
      var el = parallaxEls[i];
      var rect = el.getBoundingClientRect();
      var offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = "translate3d(0," + (offset * el._pSpeed).toFixed(2) + "px,0)";
    }
    ticking = false;
  }
  function requestScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScrollFrame); }
  }
  window.addEventListener("scroll", requestScroll, { passive: true });
  window.addEventListener("resize", requestScroll, { passive: true });
  onScrollFrame();

  /* ---- 2. Mobile menu drawer ---------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
    };
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  }

  /* ---- 3. Reveal on scroll (variants) + count-up -------------------- */
  var reveals = document.querySelectorAll(".reveal");
  var counters = document.querySelectorAll("[data-count]");

  function runCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target)) return;
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var render = function (v) {
      el.innerHTML = prefix + v + (suffix ? '<span class="sub">' + suffix + "</span>" : "");
    };
    if (reduce) { render(target); return; }
    var start = null, dur = 1400;
    var step = function (ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      var eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      render(Math.round(eased * target));
      if (t < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }

  if ("IntersectionObserver" in window && canAnimate) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          var c = entry.target.matches("[data-count]")
            ? entry.target
            : (entry.target.querySelector && entry.target.querySelector("[data-count]"));
          if (c && !c._counted) { c._counted = true; runCount(c); }
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
    counters.forEach(function (c) { if (!c.closest(".reveal")) io.observe(c); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
    counters.forEach(function (c) { c._counted = true; runCount(c); });
  }

  /* ---- 4. Custom cursor: precise dot + trailing ring ---------------- */
  if (finePointer && canAnimate) {
    document.body.classList.add("has-custom-cursor");

    var dot = document.createElement("div");
    var ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    dot.setAttribute("aria-hidden", "true");
    ring.setAttribute("aria-hidden", "true");
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var rx = mx, ry = my;
    var half = " translate(-50%,-50%)";

    window.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = "translate3d(" + mx + "px," + my + "px,0)" + half;
      if (!document.body.classList.contains("cursor-ready")) {
        document.body.classList.add("cursor-ready");
      }
    }, { passive: true });

    (function ringLoop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = "translate3d(" + rx.toFixed(2) + "px," + ry.toFixed(2) + "px,0)" + half;
      window.requestAnimationFrame(ringLoop);
    })();

    // Grow ring over interactive elements
    var hoverTargets = document.querySelectorAll(
      'a, button, .service-card, [data-cursor="hover"]'
    );
    hoverTargets.forEach(function (el) {
      el.addEventListener("mouseenter", function () { document.body.classList.add("cursor-hover"); });
      el.addEventListener("mouseleave", function () { document.body.classList.remove("cursor-hover"); });
    });

    // Show a native text caret over form fields (hide custom cursor there)
    var textTargets = document.querySelectorAll("input, textarea, select");
    textTargets.forEach(function (el) {
      el.addEventListener("mouseenter", function () { document.body.classList.add("cursor-text"); });
      el.addEventListener("mouseleave", function () { document.body.classList.remove("cursor-text"); });
    });

    // Hide the cursor when the pointer leaves the window
    document.addEventListener("mouseleave", function () { document.body.classList.add("cursor-out"); });
    document.addEventListener("mouseenter", function () { document.body.classList.remove("cursor-out"); });
    // Press feedback
    document.addEventListener("mousedown", function () { document.body.classList.add("cursor-down"); });
    document.addEventListener("mouseup", function () { document.body.classList.remove("cursor-down"); });
  }

  /* ---- 5. (Magnetic button effect removed — buttons stay in place) --- */

  /* ---- 6. Portrait cursor-tilt (subtle 3D) -------------------------- */
  if (finePointer && canAnimate) {
    var portraits = document.querySelectorAll(".portrait, .split-media");
    portraits.forEach(function (wrap) {
      var frame = wrap.querySelector(".portrait-frame");
      if (!frame) return;
      wrap.addEventListener("mousemove", function (e) {
        var r = wrap.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        frame.style.transform =
          "perspective(900px) rotateY(" + (px * 5).toFixed(2) + "deg) rotateX(" + (-py * 5).toFixed(2) + "deg)";
      });
      wrap.addEventListener("mouseleave", function () { frame.style.transform = ""; });
    });
  }

  /* ---- 7. Current year in footer ------------------------------------ */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- 8. Contact form: send via Web3Forms (owner + auto-reply) ------ */
  var form = document.querySelector(".form");
  if (form) {
    var status = form.querySelector(".form-status");
    var wrap = form.parentElement;
    var successPanel = wrap ? wrap.querySelector(".form-success") : null;
    var submitBtn = form.querySelector('button[type="submit"]') || form.querySelector(".btn");
    var OWNER_EMAIL = "holuwakemi00@gmail.com";

    var setSending = function (on) {
      if (!submitBtn) return;
      if (!submitBtn._label) submitBtn._label = submitBtn.innerHTML;
      submitBtn.disabled = on;
      submitBtn.classList.toggle("is-sending", on);
      submitBtn.innerHTML = on ? "Sending…" : submitBtn._label;
    };
    var fail = function (m) {
      if (!status) return;
      status.innerHTML = m;
      status.classList.add("err");
      status.classList.remove("ok");
    };
    var succeed = function (msg) {
      if (successPanel) {
        form.hidden = true;
        successPanel.hidden = false;
        try { successPanel.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (e) {}
      } else if (status) {
        status.textContent = msg || "Message sent.";
        status.classList.add("ok");
        status.classList.remove("err");
      }
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (status) { status.textContent = ""; status.classList.remove("ok", "err"); }

      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      var msg = (data.get("message") || "").toString().trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !msg) { fail("Please add your name, email, and a short note."); return; }
      if (!emailOk) { fail("That email address doesn't look right — mind double-checking it?"); return; }

      var key = (data.get("access_key") || "").toString();

      // Graceful fallback until a Web3Forms key is added: open the email app.
      if (!key || key.indexOf("YOUR_") === 0) {
        var company = (data.get("company") || "").toString().trim();
        var subject = "New enquiry from " + name + (company ? " — " + company : "");
        var body = "Name: " + name + "\nEmail: " + email + "\n" +
                   (company ? "Company: " + company + "\n" : "") + "\n" + msg + "\n";
        window.location.href = "mailto:" + OWNER_EMAIL +
          "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        succeed();
        return;
      }

      // Build JSON payload from all fields (includes access_key, subject, from_name, honeypot)
      var payload = {};
      data.forEach(function (v, k) { payload[k] = v; });

      setSending(true);
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          setSending(false);
          if (res && res.success) { succeed(); form.reset(); }
          else { fail((res && res.message) ? res.message : "Something went wrong. Please try again, or email " + OWNER_EMAIL + " directly."); }
        })
        .catch(function () {
          setSending(false);
          fail('Couldn\u2019t send just now — please try again, or email <a href="mailto:' + OWNER_EMAIL + '">' + OWNER_EMAIL + "</a> directly.");
        });
    });
  }
})();