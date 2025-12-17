const CASHAPP_TAG = "$etfz";

const products = [
    {
        name: "OG Fortnite Account",
        description: "Very rare Fortnite account with OG skins, exclusive emotes, and stacked inventory.",
        price: 299,
        image: "images/fortnite1.jpg",
        featured: true
    },
    {
        name: "Discord Nitro Account",
        description: "1 Year Discord Nitro account with boosts and premium perks.",
        price: 49,
        image: "images/discord1.jpg",
        featured: false
    }
];

const container = document.getElementById("products-container");

/* Render products */
products.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.index = index;

    card.innerHTML = `
        ${p.featured ? `<div class="badge">Featured</div>` : ""}
        <img src="${p.image}">
        <div class="product-content">
            <h4>${p.name}</h4>
            <div class="price">$${p.price}</div>
            <button class="buy-btn">View</button>
        </div>
    `;

    container.appendChild(card);
});

/* Open product details */
document.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const product = products[card.dataset.index];

    document.getElementById("detail-img").src = product.image;
    document.getElementById("detail-name").textContent = product.name;
    document.getElementById("detail-desc").textContent = product.description;
    document.getElementById("detail-price").textContent = `$${product.price}`;

    const cashappLink = `https://cash.app/${CASHAPP_TAG.replace("$","")}/${product.price}`;
    const buyBtn = document.getElementById("cashapp-buy");

    buyBtn.href = cashappLink;

    document.getElementById("details-modal").style.display = "flex";
});

function closeDetails() {
    document.getElementById("details-modal").style.display = "none";
}
