const buttoNrod = document.getElementById('btn-quote');
buttoNrod.addEventListener("click", () => {

    window.location.href = '/front-end/GET A FREE QUOTE/get.html';
})


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


const grids = document.querySelectorAll(".product-grid");
const pageBtns = document.querySelectorAll(".page-btn");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentPage = 1;
const totalPages = grids.length;

function showPage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;

    grids.forEach(grid => grid.classList.remove("active"));
    document.querySelector(`.product-grid[data-page="${page}"]`).classList.add("active");

    pageBtns.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.page-btn[data-page="${page}"]`).classList.add("active");
}


pageBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const page = parseInt(btn.dataset.page);
        showPage(page);
    });
});


prevBtn.addEventListener("click", () => {
    if (currentPage > 1) showPage(currentPage - 1);
});

nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) showPage(currentPage + 1);
});
showPage(currentPage);




const modal = document.getElementById("productModal");
const closeBtn = document.querySelector(".close");


const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalStars = document.getElementById("modalStars");
const modalDescription = document.getElementById("modalDescription");
const modalCategory = document.getElementById("modalCategory");
const modalTags = document.getElementById("modalTags");

document.querySelectorAll(".view-details").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const card = btn.closest(".product-card");


        modalImage.src = card.dataset.image;
        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;
        modalCategory.textContent = card.dataset.category;
        modalTags.textContent = card.dataset.tags;


        const rating = parseInt(card.dataset.rating);
        let starsHTML = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHTML += `<i class="fa-solid fa-star"></i>`;
            } else {
                starsHTML += `<i class="fa-regular fa-star"></i>`;
            }
        }
        modalStars.innerHTML = starsHTML + ` <span>(${rating} customer reviews)</span>`;

        modal.style.display = "flex";
    });
});

closeBtn.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


document.addEventListener("DOMContentLoaded", () => {
    const cartIcons = document.querySelectorAll(".product-actions .fa-shopping-cart");
    const productPage = document.getElementById("productPage");
    const topBar = document.getElementById("top-bar");
    const pagination = document.getElementById("pagination");
    const hero = document.querySelector(".hero h1");
    const breadcrumbActive = document.querySelector(".breadcrumb .active");


    const descTitle = document.getElementById("descTitle");
    const descText = document.getElementById("descText");

    // For reviews
    const reviewForm = document.getElementById("reviewForm");
    const reviewsList = document.getElementById("reviewsList");


    const customData = {
        "10 Floors 10 Stops 630kg Stainless Steel 8 Passenger Elevator Lift": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/10-floors-10-stops-630kg-stainless-steel-8-passenger-elevator-lift-180x180.jpg",
            description: `10 Floors 10 Stops 630kg Stainless Steel 8 Passenger Elevator Lift. 3 4 5 6 7 8 9 Floors Stops Passenger Elevator Lift System
We are Nigeria’s No.1 Wholesaler, Distributor, Dealer and Supplier Company with Affordable, Best and Cheapest Price for Commercial Passenger Elevator Lift.`
        },
        "10 Person Elevator Lift Price Nigeria": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/10-person-elevator-lift-price-nigeria-285x300.jpg",
            description: `10 Person Elevator Lift Price Nigeria 2 3 4 5 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for Economical Low Price Passenger Elevator`
        }
        ,
        "10 Storey Building Elevator Lift Price Nigeria": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/10-storey-building-elevator-lift-price-nigeria-300x300.jpg",
            description: `10 Storey Building Elevator Lift Price Nigeria 2 3 4 5 6 7 8 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best Buy and Cheapest Price for Economical Low Cost Price Passenger Elevator`
        },

        "12 Person Elevator Lift Price Nigeria": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/12-person-elevator-lift-price-nigeria-279x300.jpg",
            description: `12 Person Elevator Lift Price Nigeria 2 3 4 5 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for Economical Low Price Passenger Elevator`
        },

        "13 Person Elevator Lift Price Nigeria Lift Price Nigeria": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2024/07/2-Floors-2-Passenger-Residential-Home-Elevator-Lift-System2-300x300.jpg",
            description: `13 Person Elevator Lift Price Nigeria 2 3 4 5 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for Economical Low Price Passenger Elevator`
        },

        "16 Person Elevator Lift Price Nigeria": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/13-person-elevator-lift-price-nigeria-1-290x300.jpg",
            description: `16 Person Elevator Lift Price Nigeria 2 3 4 5 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for Economical Low Price Passenger Elevator`
        },

        "2 Person Elevator Lift Price Nigeria": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/2-person-elevator-lift-price-nigeria-300x300.jpg",
            description: `2 Person Elevator Lift Price Nigeria 2 3 4 5 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for Economical Low Price Passenger Elevator`
        },
        "3 Floors 3 Stops 630kg Stainless Steel 8 Passenger Elevator Lift": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/3-floors-3-stops-630kg-stainless-steel-8-passenger-elevator-lift.jpg",
            description: `3 Floors 3 Stops 630kg Stainless Steel 8 Passenger Elevator Lift. 3 4 5 6 7 8 9 Floors Stops Passenger Elevator Lift System
We are Nigeria’s No.1 Wholesaler, Distributor, Dealer and Supplier Company with Affordable, Best and Cheapest Price for Commercial Passenger Elevator Lift.`
        },


       "3 Person Elevator Lift Price Nigeria": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/3-person-elevator-lift-price-nigeria.jpg",
  description: `3 Person Elevator Lift Price Nigeria 2 3 4 5 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for Economical Low Price Passenger Elevator`
},

        "3 Storey Building Elevator Lift Price Nigeria": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/3-storey-building-elevator-lift-price-nigeria.jpg",
  description: `3 Storey Building Elevator Lift Price Nigeria 2 3 4 5 6 7 8 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best Buy and Cheapest Price for Economical Low Cost Price Passenger Elevator`
},
        
        "3 to 7 Floors Residential and Commercial Passenger Lifts in Lagos": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/3-to-7-Floors-Residential-and-Commercial-Passenger-Lifts-in-Lagos.jpeg",
  description: `Passenger lifts for 3 to 7-floor buildings in Lagos provide seamless vertical mobility for residential and commercial spaces. Designed for comfort, safety, and efficiency, these elevators ensure smooth transportation in homes, offices, hotels, and shopping centers. With advanced technology, they enhance accessibility while optimizing space and convenience.`
},
"3 to 7 Floors Residential and Commercial Passenger Lifts in Niamey, Niger": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/3-to-7-Floors-Residential-and-Commercial-Passenger-Lifts-in-Niamey-Niger-250x300.webp",
  description: `In Niamey, Niger, passenger lifts are essential for 3 to 7-floor residential and commercial buildings, ensuring smooth and safe vertical mobility. These modern elevators enhance convenience, accessibility, and efficiency in apartments, offices, hotels, and shopping centers, offering reliable performance with advanced safety features and energy-efficient technology.`
},

"4 floor building lift price": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/4-floor-building-lift-price.png",
  description: `The cost of a lift for a 4-floor building depends on factors like type, capacity, speed, and installation complexity. Hydraulic lifts are more affordable, while traction lifts offer efficiency. Prices vary based on customization, safety features, and maintenance needs. Consulting a supplier ensures an accurate estimate based on specific requirements.`
},

"4 Floors 4 Stops 450kg Stainless Steel 6 Passenger Elevator Lift": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/4-floors-4-stops-450kg-stainless-steel-6-passenger-elevator-lift.jpg",
  description: `4 Floors 4 Stops 450kg Stainless Steel 6 Passenger Elevator Lift. 3 4 5 6 7 8 9 Floors Stops Passenger Elevator Lift System
We are Nigeria’s No.1 Wholesaler, Distributor, Dealer and Supplier Company with Affordable, Best and Cheapest Price for Commercial Passenger Elevator Lift.`
},

"4 Floors 4 Stops 630kg Stainless Steel 8 Passenger Elevator Lift": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/4-floors-4-stops-630kg-stainless-steel-8-passenger-elevator-lift.jpg",
  description: `4 Floors 4 Stops 630kg Stainless Steel 8 Passenger Elevator Lift. 3 4 5 6 7 8 9 Floors Stops Passenger Elevator Lift System We are Nigeria’s No.1 Wholesaler, Distributor, Dealer and Supplier Company with Affordable, Best and Cheapest Price for Commercial Passenger Elevator Lift.`
},

"34 Person Elevator Lift": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/4-Person-Elevator-Lift.png",
  description: `A 4-person elevator lift is a compact and efficient solution for residential and small commercial buildings. Its cost depends on the type, speed, and customization options. Hydraulic and traction models offer different benefits, while installation and maintenance also affect pricing. It enhances convenience, accessibility, and space efficiency in multi-story structures.`
},

"4 Person Elevator Lift Price Nigeria": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/4-person-elevator-lift-price-nigeria.jpg",
  description: `4 Person Elevator Lift Price Nigeria 2 3 4 5 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for Economical Low Price Passenger Elevator`
},

"4 Storey Building Elevator Lift Price Nigeria": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/4-storey-building-elevator-lift-price-nigeria.jpg",
  description: `4 Storey Building Elevator Lift Price Nigeria 2 3 4 5 6 7 8 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best Buy and Cheapest Price for Economical Low Cost Price Passenger Elevator`
},

"5 Floors 5 Stops 1250kg Stainless Steel 18 Passenger Elevator Lift": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/5-floors-5-stops-1250kg-stainless-steel-18-passenger-elevator-lift.jpg",
  description: `5 Floors 5 Stops 1250kg Stainless Steel 18 Passenger Elevator Lift. 3 4 5 6 7 8 9 Floors Stops Passenger Elevator Lift System
We are Nigeria’s No.1 Wholesaler, Distributor, Dealer and Supplier Company with Affordable, Best and Cheapest Price for Commercial Passenger Elevator Lift.`
},

"5 Floors 5 Stops 1500kg Stainless Steel 20 Passenger Elevator Lift": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/5-floors-5-stops-1500kg-stainless-steel-20-passenger-elevator-lift-300x300.jpg",
  description: `5 Floors 5 Stops 1500kg Stainless Steel 20 Passenger Elevator Lift. 3 4 5 6 7 8 9 Floors Stops Passenger Elevator Lift System
We are Nigeria’s No.1 Wholesaler, Distributor, Dealer and Supplier Company with Affordable, Best and Cheapest Price for Commercial Passenger Elevator Lift.`
},

"5 Floors 5 Stops 450kg Stainless Steel 6 Passenger Elevator Lift": {
  image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/5-floors-5-stops-450kg-stainless-steel-6-passenger-elevator-lift.jpg",
  description: `5 Floors 5 Stops 450kg Stainless Steel 6 Passenger Elevator Lift. 3 4 5 6 7 8 9 Floors Stops Passenger Elevator Lift System
We are Nigeria’s No.1 Wholesaler, Distributor, Dealer and Supplier Company with Affordable, Best and Cheapest Price for Commercial Passenger Elevator Lift.`
},

"5 Floors 5 Stops 630kg Stainless Steel 8 Passenger Elevator Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/5-floors-5-stops-630kg-stainless-steel-8-passenger-elevator-lift-300x300.jpg",
    description: `5 Floors 5 Stops 630kg Stainless Steel 8 Passenger Elevator Lift. 3 4 5 6 7 8 9 Floors Stops Passenger Elevator Lift System
We are Nigeria’s No.1 Wholesaler, Distributor, Dealer and Supplier Company with Affordable, Best and Cheapest Price for Commercial Passenger Elevator Lift.`
   
  },

  "5 Person Elevator Lift Price Nigeria": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/5-person-elevator-lift-price-nigeria-300x300.jpg",
    description: `5 Person Elevator Lift Price Nigeria 2 3 4 5 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for Economical Low Price Passenger Elevator`
   
  },

  "5 Storey Building Elevator Lift Price Nigeria": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/5-storey-building-elevator-lift-price-nigeria.jpg",
    description: `5 Storey Building Elevator Lift Price Nigeria 2 3 4 5 6 7 8 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best Buy and Cheapest Price for Economical Low Cost Price Passenger Elevator`
   
  },

  "6 Floors 6 Stops 450kg Stainless Steel 6 Passenger Elevator Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/6-floors-6-stops-450kg-stainless-steel-6-passenger-elevator-lift-300x300.jpg",
    description: `6 Floors 6 Stops 450kg Stainless Steel 6 Passenger Elevator Lift. 3 4 5 6 7 8 9 Floors Stops Passenger Elevator Lift System
We are Nigeria’s No.1 Wholesaler, Distributor, Dealer and Supplier Company with Affordable, Best and Cheapest Price for Commercial Passenger Elevator Lift.`
  },

    "6 Floors 6 Stops 630kg Stainless Steel 8 Passenger Elevator Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/5-person-elevator-lift-price-nigeria-300x300.jpg",
    description: `6 Floors 6 Stops 630kg Stainless Steel 8 Passenger Elevator Lift. 3 4 5 6 7 8 9 Floors Stops Passenger Elevator Lift System
We are Nigeria’s No.1 Wholesaler, Distributor, Dealer and Supplier Company with Affordable, Best and Cheapest Price for Commercial Passenger Elevator Lift.`
  },

  "6 Storey Building Elevator Lift Price Nigeria": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/6-storey-building-elevator-lift-price-nigeria-300x300.jpg",
    description: `6 Storey Building Elevator Lift Price Nigeria 2 3 4 5 6 7 8 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best Buy and Cheapest Price for Economical Low Cost Price Passenger Elevator`
  }




        // 👉 Keep adding more products here with your own texts/images
    };


    let reviewsData = JSON.parse(localStorage.getItem("reviewsData")) || {};


    cartIcons.forEach(icon => {
        icon.addEventListener("click", (e) => {
            e.preventDefault();

            const card = e.target.closest(".product-card");
            const grid = card.closest(".product-grid");

            const title = card.querySelector("h3").textContent.trim();
            const productId = title;


            grid.style.display = "none";
            pagination.style.display = "none";
            topBar.style.display = "none";

            // Show product page
            productPage.style.display = "block";

            // Update hero + breadcrumb
            hero.textContent = title;
            breadcrumbActive.textContent = title;

            // ✅ Use custom description + image
            if (customData[productId]) {
                descTitle.textContent = title;

                descText.innerHTML = `
          <img src="${customData[productId].image}" 
               alt="${title}" 
               style="max-width:400px; display:block; margin:20px auto; border-radius:10px;" />
          <p>${customData[productId].description}</p>
        `;
            } else {
                descTitle.textContent = title;
                descText.innerHTML = "<p>No custom description available.</p>";
            }

            // Load reviews for this product
            loadReviews(productId);
        });
    });

    // 👉 Handle Review Form Submission
    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("reviewEmail").value;
        const text = document.getElementById("reviewText").value;
        const rating = document.getElementById("reviewRating").value;

        const productId = hero.textContent.trim();

        if (!reviewsData[productId]) {
            reviewsData[productId] = [];
        }

        // Add new review
        reviewsData[productId].push({ email, text, rating });

        // Save to localStorage
        localStorage.setItem("reviewsData", JSON.stringify(reviewsData));

        // Reload reviews list
        loadReviews(productId);

        reviewForm.reset();
    });

    // 👉 Load reviews for a product
    function loadReviews(productId) {
        reviewsList.innerHTML = "";

        if (!reviewsData[productId] || reviewsData[productId].length === 0) {
            reviewsList.innerHTML = "<p>No customer reviews yet.</p>";
            return;
        }

        reviewsData[productId].forEach(r => {
            const div = document.createElement("div");
            div.innerHTML = `
                <p><strong>⭐ ${r.rating}</strong> - ${r.text}</p>
                <p><em>${r.email}</em></p>
                <hr>
            `;
            reviewsList.appendChild(div);
        });
    }

    // Switch tabs
    window.showTab = function (tab) {
        document.getElementById("tab-desc").style.display = (tab === "desc") ? "block" : "none";
        document.getElementById("tab-reviews").style.display = (tab === "reviews") ? "block" : "none";
    }
});
