// Load products from JSON
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();

        const container = document.getElementById('products-container');
        container.innerHTML = ''; // clear container

        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');

            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
                <button onclick="buyProduct('${product.name}')">View Details</button>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Placeholder buy function
function buyProduct(name) {
    alert("To buy " + name + ", contact us via Discord or email.");
}

// Load products when page loads
window.addEventListener('DOMContentLoaded', loadProducts);
