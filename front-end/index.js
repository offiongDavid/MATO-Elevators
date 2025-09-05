  const slides = document.querySelectorAll('.slide');
    let current = 0;

    function showNext() {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }

    setInterval(showNext, 6000);
 

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

  const buttonProd = document.getElementById('btn2');
  const buttonServ = document.getElementById('btn3');


  buttonProd.addEventListener("click", () => {
    window.location.href = '/front-end/Products/product.html';
  })

  buttonServ.addEventListener("click", () => {
    window.location.href = '/front-end/services/service.html';
  })


  document.addEventListener("DOMContentLoaded", () => {
    
    const pageMap = {
        but1: "/front-end/category/RE/RE.html",
        but2: "/front-end/category/CL/cl.html",
        but3: "/front-end/LIFTS/Stair lift/sl.html",
        but4: "/front-end/category/Escalators/es.html",
        but5: "/front-end/LIFTS/Patients Lift/pl.html",
        but6: "/front-end/product-category/Loading Ramps/lr.html",
        but7: "/front-end/product-category/car lift/cal.html",
        but8: "/front-end/category/CA/ca.html",
        but9: "/front-end/LIFTS/Stair lift/sl.html",
        but10: "/front-end/category/CA/ca.html",
        but11: "/front-end/product-category/boom lift/bl.html",
        but12: "/front-end/category/DW/dw.html"
    };

    // Attach event listeners
    Object.keys(pageMap).forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener("click", () => {
                window.location.href = pageMap[id]; // redirect to the page
            });
        }
    });
});




const buttonexplore = document.getElementById('btn13')


  buttonexplore.addEventListener("click", () => {
    window.location.href = '/front-end/Products/product.html';
  })

  
const buttonplore = document.getElementById('btn30')


  buttonplore.addEventListener("click", () => {
    window.location.href = '/front-end/About/About.html';
  })

  const buttonlore = document.getElementById('btn-25')


  buttonlore.addEventListener("click", () => {
    window.location.href = '/front-end/About/About.html';
  })


  