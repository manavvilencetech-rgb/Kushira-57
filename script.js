let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart!");
}

function openCart() {
  document.getElementById("cart-popup").style.display = "block";

  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  cart.forEach(item => {
    list.innerHTML += `<li>${item.name} — ₹${item.price}</li>`;
  });
}

function closeCart() {
  document.getElementById("cart-popup").style.display = "none";
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function placeOrder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const shipping = document.getElementById("shipping").value;

  if (!name || !phone || !address) {
    alert("Please fill all details");
    return;
  }

  document.getElementById("order-success").innerHTML =
    "Order placed successfully! Shipping via " + shipping + ".";

  cart = [];
}

