const CASHAPP_TAG = "$etfz";

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
        description: "1 year Nitro, ready to use.",
        price: 49,
        image: "images/discord1.jpg",
        featured: false
    }
];

const container = document.getElementById("products-container");

products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        ${p.featured ? `<div class="badge">Featured</div>` : ""}
        <img src="${p.image}">
        <div class="product-content">
            <h4>${p.name}</h4>
            <p>${p.description}</p>
            <div class="price">$${p.price}</div>
            <button class="buy-btn">Purchase</button>
        </div>
    `;

    card.querySelector(".buy-btn").onclick = () => buyNow(p.name, p.price);
    container.appendChild(card);
});

function buyNow(name, price) {
    document.getElementById("modal-product").innerText = name;
    document.getElementById("modal-price").innerText = `$${price}`;
    document.getElementById("modal-cashapp").innerText = CASHAPP_TAG;
    document.getElementById("payment-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("payment-modal").style.display = "none";
}
