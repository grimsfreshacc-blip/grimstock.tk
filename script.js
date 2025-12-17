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

/* Attach event listener directly to each button */
const buttons = document.querySelectorAll(".view-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent card click from interfering
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
});

/* Optional: also allow clicking card itself to open modal */
container.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const btn = card.querySelector(".view-btn");
    if (btn) btn.click();
});

function closeDetails() {
    document.getElementById("details-modal").style.display = "none";
}
