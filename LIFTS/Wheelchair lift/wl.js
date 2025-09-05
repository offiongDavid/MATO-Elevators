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


// const grids = document.querySelectorAll(".product-grid");
// const pageBtns = document.querySelectorAll(".page-btn");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// let currentPage = 1;
// const totalPages = grids.length;

// function showPage(page) {
//     if (page < 1 || page > totalPages) return;
//     currentPage = page;

//     grids.forEach(grid => grid.classList.remove("active"));
//     document.querySelector(`.product-grid[data-page="${page}"]`).classList.add("active");

//     pageBtns.forEach(btn => btn.classList.remove("active"));
//     document.querySelector(`.page-btn[data-page="${page}"]`).classList.add("active");
// }


// pageBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const page = parseInt(btn.dataset.page);
//         showPage(page);
//     });
// });


// prevBtn.addEventListener("click", () => {
//     if (currentPage > 1) showPage(currentPage - 1);
// });

// nextBtn.addEventListener("click", () => {
//     if (currentPage < totalPages) showPage(currentPage + 1);
// });
// showPage(currentPage);



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


    const customData = {
        "Elevator Lift Wheelchair": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Elevator-Lift-Wheelchair-180x180.jpg",
    description: `An elevator lift for wheelchairs is a reliable mobility solution designed for individuals with disabilities. It ensures smooth and safe vertical transportation in homes, offices, and public buildings. With easy operation and space-efficient design, it enhances accessibility, providing independence and convenience for wheelchair users in multi-level structures.`
  },
  "Handicap Elevator Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Handicap-Elevator-Lift-180x180.png",
    description: `A handicap elevator lift provides safe and convenient mobility for individuals with disabilities, allowing easy access to different levels in homes, offices, and public spaces. Designed with user-friendly controls and safety features, it enhances independence and comfort while ensuring a smooth and secure vertical transportation experience.`
  },
  "Wheelchair Elevator Lift": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Wheelchair-Elevator-Lift-180x180.png",
    description: `A wheelchair elevator lift provides a safe and convenient way for individuals with mobility challenges to access different levels of a building. It ensures independence, requires minimal space, and offers advanced safety features. Ideal for homes and public spaces, it enhances accessibility and inclusivity effortlessly.`
  },
  "Wheelchair Platform Lift Elevator": {
    image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Wheelchair-Platform-Lift-Elevator-180x180.jpg",
    description: `A wheelchair platform lift elevator provides a safe and convenient way for wheelchair users to access different levels in homes and public spaces. Designed for smooth operation, it ensures independence and accessibility. With easy installation and space-saving features, it offers a reliable solution for mobility challenges in any environment.`
  },
    };


    let reviewsData = JSON.parse(localStorage.getItem("reviewsData")) || {};



    cartIcons.forEach(icon => {
        icon.addEventListener("click", (e) => {
            e.preventDefault();

            const card = e.target.closest(".product-card");
            const grid = card.closest(".product-grid");

            const title = card.querySelector("h3").textContent.trim();
            const productId = title;

            // Hide grid + topbar (only if they exist)
            if (grid) grid.style.display = "none";
            if (pagination) pagination.style.display = "none"; // will skip if null
            if (topBar) topBar.style.display = "none";

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

            loadReviews(productId);

           
            showTab("desc");
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
