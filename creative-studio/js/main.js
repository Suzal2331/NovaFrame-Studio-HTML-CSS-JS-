// Set year
document.querySelectorAll("#year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
if (hamburger && menu) {
  hamburger.addEventListener("click", () => menu.classList.toggle("open"));

  // Close menu when user clicks a link (better UX)
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    const clickedInside = menu.contains(e.target) || hamburger.contains(e.target);
    if (!clickedInside) menu.classList.remove("open");
  });
}

// Scroll reveal (premium UX)
const revealEls = document.querySelectorAll("[data-reveal]");
if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => io.observe(el));
}

// Contact form demo
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
if (form && msg) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "✅ Message sent (demo). Connect backend later if needed.";
    form.reset();

    // Auto-clear message after 4 seconds
    setTimeout(() => (msg.textContent = ""), 4000);
  });
}
