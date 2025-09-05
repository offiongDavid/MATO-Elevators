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
        "Cargo Elevator Lift": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Cargo-Elevator-Lift-300x300.png",
            description: `A cargo elevator lift is designed for transporting heavy goods and materials in commercial and industrial settings. Built with robust construction and advanced safety features, it ensures efficient and secure movement of cargo across multiple floors. These lifts enhance productivity, minimize manual labor, and streamline logistics for warehouses, factories, and storage facilities.`
        },

        "Freight Lift Elevator": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Freight-Lift-Elevator-300x300.png",
            description: `A freight lift elevator is designed for transporting heavy goods, machinery, and materials between floors in industrial and commercial settings. It enhances efficiency, reduces manual labor, and ensures safe movement of bulky loads. With advanced safety features and durability, it plays a crucial role in warehouses, factories, and logistics centers.`
        },

        "Cargo Lift Elevator": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Cargo-Lift-Elevator-300x300.png",
            description: `A cargo lift elevator is designed for transporting heavy goods and materials between floors in warehouses, factories, and commercial spaces. Built with strong materials and advanced safety features, it ensures smooth and reliable operation. It enhances efficiency, reduces manual labor, and provides a secure way to move heavy loads effortlessly.`
        },

        "Hoist Elevator Lift": {
            image: "https://homeliftelevators.ng/wp-content/uploads/2025/02/Hoist-Elevator-Lift-300x300.png",
            description: `Escalators provide a seamless way to move between floors in malls, airports, and commercial spaces. They enhance accessibility, improve crowd management, and ensure convenience for users. Modern escalators come with advanced safety features, energy-efficient technology, and sleek designs, making them a vital component of urban infrastructure.`
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
