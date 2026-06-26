(() => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");
  const year = document.querySelector("[data-year]");
  const hero = document.querySelector(".hero");
  const heroBg = document.querySelector(".hero-bg");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (hero && heroBg && !reduceMotion.matches) {
    let ticking = false;

    const updateHeroParallax = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
      heroBg.style.setProperty("--hero-parallax", `${progress * 148}px`);
      ticking = false;
    };

    const requestHeroParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeroParallax);
        ticking = true;
      }
    };

    updateHeroParallax();
    window.addEventListener("scroll", requestHeroParallax, { passive: true });
    window.addEventListener("resize", requestHeroParallax);
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.querySelector(".material-icons").textContent = isOpen ? "close" : "menu";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.querySelector(".material-icons").textContent = "menu";
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px 160px 0px" });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const counters = document.querySelectorAll("[data-count]");
  const animateCounter = (node) => {
    const target = Number(node.dataset.count);
    if (!Number.isFinite(target)) return;

    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = Math.round(target * eased);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        node.textContent = String(target);
      }
    };

    requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }

  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");

  if ("IntersectionObserver" in window && sections.length && navAnchors.length) {
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navAnchors.forEach((anchor) => {
          anchor.classList.toggle("is-active", anchor.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { threshold: 0.35 });

    sections.forEach((section) => activeObserver.observe(section));
  }
})();
