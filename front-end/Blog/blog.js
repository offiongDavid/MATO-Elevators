function showPage(page) {
    // hide all containers
    document.querySelectorAll('.card-container').forEach(c => c.style.display = 'none');

    // show selected container
    document.getElementById('page' + page).style.display = 'grid';

    // update active button
    document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.page-btn:nth-child(' + page + ')').classList.add('active');
}


const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(sec => {
    const windowHeight = window.innerHeight;
    const revealTop = sec.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });

   const buttoNrod = document.getElementById('btn-quote');
  buttoNrod.addEventListener("click", () => {

    window.location.href = '/front-end/GET A FREE QUOTE/get.html';
  })