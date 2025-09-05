 const buttoNrod = document.getElementById('btn-quote');
  buttoNrod.addEventListener("click", () => {

    window.location.href = '/GET A FREE QUOTE/get.html';
  })


  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });