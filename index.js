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

    window.location.href = '/GET A FREE QUOTE/get.html';
  })

  const buttonProd = document.getElementById('btn2');
  const buttonServ = document.getElementById('btn3');


  buttonProd.addEventListener("click", () => {
    window.location.href = '/Products/product.html';
  })

  buttonServ.addEventListener("click", () => {
    window.location.href = '/services/service.html';
  })


  document.addEventListener("DOMContentLoaded", () => {
    
    const pageMap = {
        but1: "/category/RE/RE.html",
        but2: "/category/CL/cl.html",
        but3: "/LIFTS/Stair lift/sl.html",
        but4: "/category/Escalators/es.html",
        but5: "/LIFTS/Patients Lift/pl.html",
        but6: "/product-category/Loading Ramps/lr.html",
        but7: "/product-category/car lift/cal.html",
        but8: "/category/CA/ca.html",
        but9: "/LIFTS/Stair lift/sl.html",
        but10: "/category/CA/ca.html",
        but11: "/product-category/boom lift/bl.html",
        but12: "/category/DW/dw.html"
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
    window.location.href = '/Products/product.html';
  })

  
const buttonplore = document.getElementById('btn30')


  buttonplore.addEventListener("click", () => {
    window.location.href = '/About/About.html';
  })

  const buttonlore = document.getElementById('btn-25')


  buttonlore.addEventListener("click", () => {
    window.location.href = '/About/About.html';
  })


  