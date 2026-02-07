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

// Function triggered by button click
function startFilter() {
    const minPrice = Number(document.getElementById("priceInput").value);

    if (isNaN(minPrice) || minPrice <= 0) {
        alert("Please enter a valid minimum price");
        return;
    }

    filterProductsByMinPrice(minPrice);
}

// Filter logic
function filterProductsByMinPrice(minPrice) {
    console.log(`\nProducts with price >= ₹${minPrice}:`);

    const filtered = productsData.products.filter(
        product => product.price >= minPrice
    );

    if (filtered.length === 0) {
        console.log("No products found.");
    } else {
        filtered.forEach(product => {
            console.log(
                `ID: ${product.id}, Name: ${product.name}, Price: ₹${product.price}, Category: ${product.category}`
            );
        });
    }
}
