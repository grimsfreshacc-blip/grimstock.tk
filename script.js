// Example product data
const products = [
    {
        name: "Rare OG Fortnite Account - Black Knight",
        description: "Legendary Fortnite account with Black Knight skin and multiple rare emotes from Season 2.",
        price: "$299.99",
        image: "images/fortnite1.jpg",
        featured: true
    },
    {
        name: "Discord Nitro Account - 1 Year",
        description: "Premium Discord account with Nitro subscription and server boost perks.",
        price: "$49.99",
        image: "images/discord1.jpg",
        featured: true
    },
    {
        name: "Stacked Roblox Account - 50K Robux",
        description: "Premium Roblox account loaded with 50,000 Robux and exclusive limited items.",
        price: "$189.99",
        image: "images/roblox1.jpg",
        featured: true
    },
    {
        name: "Minecraft Java Premium Account",
        description: "Full access Minecraft Java Edition account. Play on any server and enjoy mods.",
        price: "$39.99",
        image: "images/minecraft1.jpg",
        featured: false
    },
    {
        name: "Fortnite Renegade Raider Account",
        description: "Ultra-rare Fortnite account featuring the legendary Renegade Raider skin from Season 1.",
        price: "$499.99",
        image: "images/fortnite2.jpg",
        featured: false
    }
];

// Function to load products
const container = document.getElementById("products-container");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    
    card.innerHTML = `
        ${product.featured ? '<div class="badge">Featured</div>' : ''}
        <img src="${product.image}" alt="${product.name}">
        <div class="product-content">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
        </div>
    `;
    
    container.appendChild(card);
});
