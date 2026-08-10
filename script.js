// =================================
// IMAGE GALLERY
// =================================

const images = document.querySelectorAll(".image img");

const modal = document.querySelector("#modal");

const modalImage = document.querySelector("#modal-img");

const close = document.querySelector("#close");


// Open Image

images.forEach(function (image) {

    image.addEventListener("click", function () {

        modalImage.src = image.src;

        modalImage.alt = image.alt;

        modal.style.display = "flex";

    });

});


// Close Image

close.addEventListener("click", function () {

    modal.style.display = "none";

});


// =================================
// LIGHT / DARK MODE
// =================================

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = "☀️ Light Mode";

    } else {

        themeBtn.innerHTML = "🌙 Dark Mode";

    }

});


// =================================
// MOBILE MENU
// =================================

const menuBtn = document.querySelector("#menu-btn");

const navLinks = document.querySelector("#nav-links");

const navbar = document.querySelector(".navbar");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    navbar.classList.toggle("menu-open");


    if (navLinks.classList.contains("show")) {

        menuBtn.innerHTML = "✕";

    } else {

        menuBtn.innerHTML = "☰";

    }

});