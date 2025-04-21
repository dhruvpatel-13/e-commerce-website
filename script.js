document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add to Cart
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            let product = event.target.closest(".product");
            let productId = product.dataset.id;
            let productName = product.dataset.name;
            let productPrice = product.dataset.price;

            let item = { id: productId, name: productName, price: productPrice };
            cart.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${productName} added to cart!`);
        });
    });

    // Display Cart Items
    if (document.getElementById("cart-items")) {
        let cartContainer = document.getElementById("cart-items");
        cartContainer.innerHTML = cart.length ? "" : "<p>Your cart is empty</p>";

        cart.forEach(item => {
            let div = document.createElement("div");
            div.textContent = `${item.name} - ${item.price}rs`;
            cartContainer.appendChild(div);
        });
    }

    // Buy Now
    if (document.getElementById("buy-now")) {
        document.getElementById("buy-now").addEventListener("click", () => {
            let address = document.getElementById("user-address").value;
            if (!address) {
                alert("Please enter your address.");
                return;
            }

            alert(`Order placed! Shipping to: ${address}`);
            localStorage.removeItem("cart");
            window.location.reload();
        });
    }
});
