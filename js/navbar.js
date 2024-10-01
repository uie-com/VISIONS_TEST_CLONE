document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".topNavIcon");
  const headButton = document.querySelector(".head-button");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    headButton.classList.toggle("show");
  });
});
