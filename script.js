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

/* Render products dynamically */
products.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        ${p.featured ? `<div class="badge">Featured</div>` : ""}
        <img src="${p.image}">
        <div class="product-content">
            <h4>${p.name}</h4>
            <div class="price">$${p.price}</div>
            <button class="view-btn" data-index="${index}">View</button>
        </div>
    `;

    container.appendChild(card);
});

/* Event delegation: handle all clicks inside container */
container.addEventListener("click", (e) => {
    // If user clicked the "View" button
    const btn = e.target.closest(".view-btn");
    if (!btn) return; // Ignore other clicks

    const index = btn.dataset.index;
    const product = products[index];

    document.getElementById("detail-img").src = product.image;
    document.getElementById("detail-name").textContent = product.name;
    document.getElementById("detail-desc").textContent = product.description;
    document.getElementById("detail-price").textContent = `$${product.price}`;

    const cashappLink = `https://cash.app/${CASHAPP_TAG.replace("$","")}/${product.price}`;
    document.getElementById("cashapp-buy").href = cashappLink;

    document.getElementById("details-modal").style.display = "flex";
});

/* Optional: close modal function */
function closeDetails() {
    document.getElementById("details-modal").style.display = "none";
}
