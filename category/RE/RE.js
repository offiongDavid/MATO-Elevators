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

    // For description tab
    const descTitle = document.getElementById("descTitle");
    const descText = document.getElementById("descText");

    // For reviews
    const reviewForm = document.getElementById("reviewForm");
    const reviewsList = document.getElementById("reviewsList");

    // 👉 Custom data for cart click
    const customData = {
        "2 Floors 2 Passenger Residential Home Elevator Lift System": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2024/07/2-Floors-2-Passenger-Residential-Home-Elevator-Lift-System-300x300.jpg",
            description: `The 2 Floors Home Elevator is a state-of-the-art solution designed for residential buildings. 
      It combines safety, durability, and modern aesthetics to improve comfort and accessibility. 
      With advanced hydraulic systems, energy efficiency, and customizable finishes, this lift is the perfect choice 
      for villas, duplexes, and private homes.`
        },
        "2 Stop 3 Stop Home Lift Elevator": {
            image: "/Images/pexels-falling4utah-1080721.jpg",
            description: `The 2 Stop 3 Stop Home Lift Elevator is engineered to provide smooth rides with 
      maximum efficiency. Its compact design fits small shafts and ensures low maintenance while 
      delivering safety and reliability. Ideal for homes with two or three levels, it supports both 
      modern and traditional architectural designs.`
        },

        "2 Floors Home Elevator": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/07/zm84edhi3es-300x300.jpg",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },

  "3 Floors 3 Passenger Residential Home Elevator Lift System": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/07/2-Floors-2-Passenger-Residential-Home-Elevator-Lift-System2-300x300.jpg",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },

  "3 to 7 Floors Residential and Commercial Passenger Lifts": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/3-to-7-Floors-Residential-and-Commercial-Passenger-Lifts-300x300.avif",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
    "3 to 7 Floors Residential and Commercial Passenger Lifts in Abuja": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/3-to-7-Floors-Residential-and-Commercial-Passenger-Lifts-in-Abuja-300x300.avif",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
  "3 to 7 Floors Residential and Commercial Passenger Lifts in Benin City": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/3-to-7-Floors-Residential-300x300.webp",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
  "3 to 7 Floors Residential and Commercial Passenger Lifts in Cotonou, Benin Republic": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/3-to-7-Floors-Residential-and-Commercial-Passenger-Lifts-in-Cotonou-Benin-Republic.jpeg",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },

   "3 to 7 Floors Residential and Commercial Passenger Lifts in Port Harcourt": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/3-to-7-Floors-Residential-and-Commercial-Passenger-Lifts-in-Port-Harcourt-300x300.avif",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
  "3-Floor Small Residential Home Elevator": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/3-Floor-Small-Residential-Home-Elevator-180x180.webp",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
  "320kg Residential Elevator Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/07/320kg-Residential-Elevator-Lift-282x300.jpg",
    description: `PVE Pneumatic Elevator Lift 2 3 4 Floors Passenger Residential Home Elevator Lift System  
Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 4 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
   "3 to 7 Floors Residential and Commercial Passenger Lifts in Yaoundé, Camerounr": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/3-to-7-Floors-Residential-and-Commercial-Passenger-Lifts-in-Yaounde-Cameroun-300x300.avif",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
  "4 Floor Elevator Cost": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/4-Floor-Elevator-Cost-180x180.png",
    description: `The cost of a 4-floor elevator depends on various factors, including the type, design, installation complexity, and technology used. Hydraulic, traction, and pneumatic elevators have different pricing structures. Additional features like advanced safety systems, premium interior finishes, and energy efficiency also impact the overall expense of installation and maintenance.`
  },
  "4 Floors 2 Passenger Residential Home Elevator Lift System": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/07/4-Floors-2-Passenger-Residential-Home-Elevator-Lift-System-180x180.jpg",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
  "4 Floors Hydraulic Residential Home Elevator Lift System": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/07/4-Floors-Hydraulic-Residential-Home-Elevator-Lift-System-180x180.jpg",
    description: `4 Floors Hydraulic Residential Home Elevator Lift System

Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 4 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift`
  },
  "4 Person Elevator Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/4-Person-Elevator-Lift-180x180.png",
    description: `A 4-person elevator lift is a compact and efficient solution for residential and small commercial buildings. Its cost depends on the type, speed, and customization options. Hydraulic and traction models offer different benefits, while installation and maintenance also affect pricing. It enhances convenience, accessibility, and space efficiency in multi-story structures.`
  },
  "450kg Heavyduty Residential Elevator": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/08/450kg-Heavyduty-Residential-Elevator-180x180.jpg",
    description: `450kg Heavyduty Residential Elevator 2 3 4 5 Floors Stops Passenger Residential Home Elevator Lift System
We are Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 450kg Heavyduty Residential Elevator`
  },

   "5 Floor Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Building-Traction-Passenger-Complete-Lift-5-Stop-10-Floors-Elevator-Price-265x300.avif",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
  "5 Person Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/3-to-7-Floors-Residential-and-Commercial-Passenger-Lifts-in-Yaounde-Cameroun-300x300.avif",
    description: `A 5-person lift is designed to provide efficient vertical transportation for small groups in residential, commercial, and office buildings. It ensures smooth and safe movement between floors, featuring advanced safety mechanisms, comfortable interiors, and energy-efficient technology. The design varies based on space availability, operational requirements, and aesthetic preferences.`
  },
  "8 Floor Elevator": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/8-Elevator-Lift-180x180.avif",
    description: `An 8-floor elevator provides seamless vertical transportation in residential, commercial, and office buildings. Designed for efficiency and safety, it ensures smooth operation with advanced technology and modern aesthetics. With features like automatic doors, emergency stop systems, and energy-efficient mechanisms, it enhances accessibility and convenience for all users.`
  },
    "Basement Elevator Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Basement-Elevator-Lift--159x300.jpeg",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
  "Best Elevator Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Best-Elevator-Lift-180x180.png",
    description: `The best elevator lift offers smooth operation, advanced safety features, and energy efficiency. Whether for residential, commercial, or industrial use, a high-quality lift enhances convenience and accessibility. With modern designs, quiet performance, and durable construction, the best elevator lift ensures seamless vertical transportation while adding value to any space.`
  },
  "Best Home Lift Elevator": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Best-Home-Lift-Elevator-180x180.png",
    description: `A home lift elevator enhances convenience, accessibility, and luxury in residential spaces. The best models offer smooth operation, energy efficiency, and stylish designs that blend seamlessly with home interiors. Advanced safety features, quiet performance, and compact designs make these elevators ideal for multi-story homes, ensuring effortless mobility for all residents.`
  },
  "Building Lift Price": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Building-Lift-Price-180x180.avif",
    description: `A building lift enhances accessibility, convenience, and efficiency in residential and commercial spaces. Designed for smooth operation, durability, and safety, these lifts come in various types, including hydraulic and traction systems. Modern lifts offer energy efficiency, advanced control panels, and sleek designs, making them an essential addition to any building.`
  },
    "Capsule Residential Home Elevator Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/07/Capsule-Residential-Home-Elevator-Lift-180x180.jpg",
    description: `Capsule Residential Home Elevator Lift.
Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for Capsule Residential Home Elevator Lift.`
  },
  "Cost of Elevator Installation in Home": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Elevator-Installation-in-Home-180x180.png",
    description: `Installing an elevator in a home involves planning, structural modifications, and professional installation. The cost depends on factors like the type of elevator, space requirements, and labor charges. Structural changes may be needed for shaft construction. Regular maintenance ensures longevity and safety, making professional installation essential for smooth operation.`
  },
  "Cost of Elevator Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Cost-of-Elevator-Lift-180x180.png",
    description: `The cost of an elevator lift depends on several factors, including its type, size, load capacity, technology, and installation requirements. Hydraulic lifts are generally more affordable, whereas traction and machine room-less elevators offer higher efficiency and durability. Customization, safety features, and automation can also influence the overall cost. Installation expenses vary based on the building structure and labor requirements. Regular maintenance is essential for smooth operation and longevity, ensuring reliability and safety. Investing in a high-quality elevator lift enhances accessibility, convenience, and functionality in commercial and residential buildings.`
  },
  "Cost of Lift in Nigeria": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Cost-of-home-Lift-in-Nigeria-180x180.png",
    description: `The cost of a lift in Nigeria varies based on factors such as type, capacity, number of floors, installation complexity, and customization. Prices range from affordable options for residential buildings to high-end models for commercial spaces. Additional costs include maintenance, energy efficiency features, and market fluctuations affecting final pricing.`
  },

   "Cost of Stair Lift Elevator": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Cost-of-Stair-Lift-Elevator-180x180.png",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
  "Elevator and Lift Repair": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Elevator-and-Lift-Repair-180x180.png",
    description: `Elevators and lifts require regular maintenance and timely repairs to function efficiently and safely. Professional repair services address issues like door malfunctions, slow operation, and sudden breakdowns. Expert technicians ensure smooth performance, minimize downtime, and enhance safety by fixing mechanical and electrical faults, extending the lifespan of the lift system.`
  },
  "Elevator 6 Floor – Reliable Home Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Elevator-6-Floor-Reliable-Home-Lift-180x180.avif",
    description: `A six-floor home elevator provides seamless vertical transportation, ensuring convenience and accessibility for multi-story residences. Designed for smooth operation and safety, these lifts enhance mobility for residents, especially the elderly or individuals with mobility challenges. With modern features, energy efficiency, and stylish designs, a home elevator adds comfort and value to any property.`
  },
  "Elevator Company in Nigeria": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/download-180x180.png",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },
   "Elevator Dimensions Price Quote": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Elevator-Dimensions-180x180.png",
    description: `Elevator dimensions vary based on their purpose, with residential models being compact and commercial or freight elevators offering larger capacities. Standard sizes range from small passenger lifts to spacious freight elevators. Pricing depends on size, technology, installation, and maintenance needs, with custom features influencing overall costs. Accurate quotes require site assessments.`
  },

  "Elevator for 6 Floors": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Elevator-for-6-Floors-180x180.avif",
    description: `An elevator for 6 floors provides a seamless vertical transportation solution for residential, commercial, and office buildings. Designed for efficiency and safety, it ensures smooth movement between multiple levels. With advanced technology, energy-efficient operation, and modern design, it enhances accessibility while offering a comfortable and secure experience for passengers.`
  },

  "Elevator for 7 Floors": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Elevator-for-7-Floors-180x180.avif",
    description: `An elevator for 7 floors provides reliable vertical transportation in residential, commercial, and industrial buildings. Designed for efficiency, safety, and comfort, it features advanced control systems, smooth operation, and modern aesthetics. With spacious cabins and energy-saving technology, it ensures convenient and seamless movement between multiple levels.`
  },
  "2 Floors Home Elevator": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2024/07/320kg-Residential-Elevator-Lift-282x300.jpg",
    description: `Nigeria’s No.1 Dealer and Supplier Company with Best and Cheapest Price for 2 Floors small shaftless residential elevators hydraulic ascensor house villa lift passenger home lift.`
  },



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

 
