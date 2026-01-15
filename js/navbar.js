document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const path = window.location.pathname;

    links.forEach(link => {
        const href = link.getAttribute("href");

        if (path === "/" && href === "/") {
            link.classList.add("active");
        }

        if (href !== "/" && path.startsWith(href)) {
            link.classList.add("active");
        }
    });
});
