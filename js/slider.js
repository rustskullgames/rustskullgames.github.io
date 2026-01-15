setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.remove();

    document.getElementById("site").style.display = "block";
    document.body.style.overflow = "auto";
}, 1400);
