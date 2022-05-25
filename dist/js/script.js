// navbar fixed
window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.add("flex");
        toTop.classList.remove("hidden");
    } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.add("hidden");
        toTop.classList.remove("flex");
    }
};

// hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});
window.addEventListener("click", function(e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
    }
});

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function() {
    if (darkToggle.checked) {
        html.classList.add("dark");
        localStorage.theme = "dark";
    } else {
        html.classList.remove("dark");
        localStorage.theme = "light";
    }
});

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}