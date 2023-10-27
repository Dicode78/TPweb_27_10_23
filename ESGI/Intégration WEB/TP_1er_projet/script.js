const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((navLink) => {
            navLink.classList.remove('active');
        });

        link.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const barsIcon = document.getElementById("bars");
    const marksIcon = document.getElementById("marks");
    const navList = document.querySelector("header .navigation ul");

    marksIcon.style.display = "none";

    barsIcon.addEventListener("click", function () {
        navList.classList.remove("hidden");
        barsIcon.style.display = "none";
        marksIcon.style.display = "block";
    });

    marksIcon.addEventListener("click", function () {
        navList.classList.add("hidden");
        marksIcon.style.display = "none";
        barsIcon.style.display = "block";
    });

    const viewportWidth = window.innerWidth;
    if (viewportWidth <= 1350) {
        navList.classList.add("hidden");
        barsIcon.style.display = "block";
    }
});
