const CASHAPP_TAG = "$eftz";

const products = [
    {
        name: "OG Fortnite Account",
        description: "Rare skins, stacked inventory.",
        price: 299,
        image: "images/fortnite1.jpg",
        featured: true
    },
    {
        name: "Discord Nitro Account",
        description: "1 Year Nitro subscription.",
        price: 49,
        image: "images/discord1.jpg",
        featured: false
    }
];

const container = document.getElementById("products-container");

products.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        ${p.featured ? `<div class="badge">Featured</div>` : ""}
        <img src="${p.image}">
        <div class="product-content">
            <h4>${p.name}</h4>
            <p>${p.description}</p>
            <div class="price">$${p.price}</div>
            <button class="buy-btn" data-index="${index}">Purchase</button>
        </div>
    `;

    container.appendChild(card);
});

/* CLICK HANDLER (THIS IS THE FIX) */
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("buy-btn")) {
        const product = products[e.target.dataset.index];

        document.getElementById("modal-product").textContent = product.name;
        document.getElementById("modal-price").textContent = `$${product.price}`;
        document.getElementById("modal-cashapp").textContent = CASHAPP_TAG;

        document.getElementById("payment-modal").style.display = "flex";
    }
});

function closeModal() {
    document.getElementById("payment-modal").style.display = "none";
}
