
// JSON object containing product data
const productsData = {
    products: [
        { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
        { id: 2, name: "Headphones", price: 2500, category: "Electronics" },
        { id: 3, name: "Chair", price: 3000, category: "Furniture" },
        { id: 4, name: "Smartphone", price: 20000, category: "Electronics" },
        { id: 5, name: "Book", price: 500, category: "Education" }
    ]
};

// Display all products
console.log("All Products:");
productsData.products.forEach(product => {
    console.log(
        `ID: ${product.id}, Name: ${product.name}, Price: ₹${product.price}, Category: ${product.category}`
    );
});

// Function to filter products by minimum price
function filterProductsByMinPrice(minPrice) {
    const filteredProducts = productsData.products.filter(
        product => product.price >= minPrice
    );

    console.log(`\nProducts with price >= ₹${minPrice}:`);
    if (filteredProducts.length === 0) {
        console.log("No products found.");
    } else {
        filteredProducts.forEach(product => {
            console.log(
                `ID: ${product.id}, Name: ${product.name}, Price: ₹${product.price}, Category: ${product.category}`
            );
        });
    }
}

// Click anywhere on the page to trigger input (GitHub Pages safe)
document.body.addEventListener("click", function () {
    const userMinPrice = Number(prompt("Enter minimum price:"));
    filterProductsByMinPrice(userMinPrice);
}, { once: true });
