document.addEventListener("DOMContentLoaded", () => {

  // INTRO FADE
  const intro = document.getElementById("intro");
  if (intro) {
    setTimeout(() => {
      intro.classList.add("fade-out");
    }, 1400);
  }

  // NAVBAR SHRINK ON SCROLL
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("shrink", window.scrollY > 60);
  });

  // ACTIVE NAV LINK
  const path = window.location.pathname;
  document.querySelectorAll("nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (path === href || path.startsWith(href + "/")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

});
