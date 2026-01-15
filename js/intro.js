window.addEventListener("load", () => {
    const intro = document.getElementById("intro");
    const site = document.getElementById("site");

    /* 1️⃣ Yumuşak fade-in */
    setTimeout(() => {
        intro.classList.add("show");
    }, 100);

    /* 2️⃣ Ekranda biraz daha kalsın */
    setTimeout(() => {
        intro.classList.add("hidden");
        site.classList.add("visible");
    }, 1600); // ← önce 900’dü, şimdi daha sinematik

    /* 3️⃣ Tamamen DOM’dan kaldır */
    setTimeout(() => {
        intro.style.display = "none";
    }, 2100);
});
