window.addEventListener("load", () => {
    const intro = document.getElementById("intro");
    const site = document.getElementById("site");

    // 0.9 saniye sonra intro kaybolur
    setTimeout(() => {
        intro.classList.add("hidden");
        site.classList.add("visible");
    }, 900);

    // 1.3 saniye sonra DOM'dan silinir
    setTimeout(() => {
        intro.style.display = "none";
    }, 1300);
});
