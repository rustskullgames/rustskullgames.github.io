document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const path = window.location.pathname;

    links.forEach(link => {
        const href = link.getAttribute("href");

        // Ana sayfa kontrolü
        if (path === "/" && href === "/") {
            link.classList.add("active");
        }

        // Diğer sayfalar
        if (path.startsWith(href) && href !== "/") {
            link.classList.add("active");
        }
    });
});
