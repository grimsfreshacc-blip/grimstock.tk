const CASHAPP_TAG = "$etfz";

const products = [
    {
        name: "purple skull",
        description: "crazy safe skull dark skully 170 skins OG Skull Trooper | Dark Skully | Masterchief - Matte Black | Thrilldiver | The Reaper | Elite Agent | Cobalt Snowfoot | Blue Striker | OG Ghost Portal | Dark Skully Satchel | 1500VB 15 name changes safe asf lifetime warrenty",
        price: $299.99,
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

/* Event delegation for dynamically created buttons */
container.addEventListener("click", (e) => {
    const btn = e.target.closest(".view-btn");
    if (!btn) return;

    const index = btn.dataset.index;
    const product = products[index];

    document.getElementById("detail-img").src = product.image;
    document.getElementById("detail-name").textContent = product.name;
    document.getElementById("detail-desc").textContent = product.description;
    document.getElementById("detail-price").textContent = `$${product.price}`;

    const cashappLink = `https://cash.app/${CASHAPP_TAG.replace("$","")}/${product.price}`;
    const buyBtn = document.getElementById("cashapp-buy");
    buyBtn.href = cashappLink;

    document.getElementById("details-modal").style.display = "flex";

    /* Generate order ID for receipt */
    const orderID = "ORD-" + Math.floor(Math.random()*900000 + 100000);
    document.getElementById("order-id").textContent = orderID;
    document.getElementById("order-total").textContent = `$${product.price}`;
    document.getElementById("order-status").textContent = "Pending";
    document.getElementById("admin-notes").textContent = "Admin Notes: Verify payment screenshot in support chat.";
});

/* Close modals */
function closeDetails() {
    document.getElementById("details-modal").style.display = "none";
}
function closeReceipt() {
    document.getElementById("receipt-modal").style.display = "none";
}

/* Optional: when user clicks Cash App, also show receipt modal */
document.getElementById("cashapp-buy").addEventListener("click", () => {
    document.getElementById("details-modal").style.display = "none";
    document.getElementById("receipt-modal").style.display = "flex";
});
