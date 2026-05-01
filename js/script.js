"use strict";


window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navToggler = document.querySelector(".nav-toggler");
  const mobileNav = document.querySelector(".mobile-nav");

  const themePreference = sessionStorage.getItem("themePreference");
  if (themePreference && themePreference === "dark") {
    document.body.classList.add("dark");
  }


  const darkModeToggler = document.querySelector("button.dark-mode-toggler");
  const darkModeIcon = document.querySelector("button.dark-mode-toggler i")
  darkModeToggler.addEventListener("click", () => {
    let result = body.classList.toggle("dark");
    if (result) {
      sessionStorage.setItem("themePreference", "dark");
      darkModeIcon.classList.remove("fa-moon");
      darkModeIcon.classList.add("fa-sun");
    }
    else {
      sessionStorage.removeItem("themePreference");
      darkModeIcon.classList.remove("fa-sun");
      darkModeIcon.classList.add("fa-moon");
    }
  });


  navToggler.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
});


});