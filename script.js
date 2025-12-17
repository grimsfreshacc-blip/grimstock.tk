const CASHAPP_TAG = "$etfz";

const products = [
    {
        name: "Rare OG Fortnite Account - Black Knight",
        description: "Legendary Fortnite account with Black Knight skin.",
        price: 299.99,
        image: "images/fortnite1.jpg",
        featured: true
    },
    {
        name: "Discord Nitro Account - 1 Year",
        description: "Premium Discord account with Nitro subscription.",
        price: 49.99,
        image: "images/discord1.jpg",
        featured: true
    },
    {
        name: "Stacked Roblox Account - 50K Robux",
        description: "Roblox account with 50,000 Robux.",
        price: 189.99,
        image: "images/roblox1.jpg",
        featured: false
    }
];

const container = document.getElementById("products-container");

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        ${product.featured ? `<div class="badge">Featured</div>` : ""}
        <img src="${product.image}">
        <div class="product-content">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <div class="price">$${product.price}</div>
            <button class="buy-btn" onclick="buyNow('${product.name}', ${product.price})">
                Purchase
            </button>
        </div>
    `;

    container.appendChild(card);
});

function buyNow(productName, price) {
    document.getElementById("modal-product").innerText = productName;
    document.getElementById("modal-price").innerText = `$${price}`;
    document.getElementById("modal-cashapp").innerText = CASHAPP_TAG;
    document.getElementById("payment-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("payment-modal").style.display = "none";
}
