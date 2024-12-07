import { loadProducts } from './productLoader.js';

window.onload = loadProducts; // Load products when the page is loaded

function confirmDeleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        deleteProduct(index);
    }
}


function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear existing products

    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach((product, index) => {
                if (product.name.toLowerCase().includes(query)) {
                    const productDiv = document.createElement('div');
                    productDiv.className = 'product';
                    productDiv.innerHTML = `
                        <h3><a href="product.html?id=${index}">${product.name}</a></h3>
                        <p>$${parseFloat(product.price).toFixed(2)}</p>
                    `;
                    productList.appendChild(productDiv);
                }
            });
        });
}