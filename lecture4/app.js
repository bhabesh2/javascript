// Shopping Cart Application

// Create an array to represent the items in the cart
let cartItems = [];

// Function to add items to the cart
function addToCart(item, price) {
  cartItems.push({ item, price });
}

// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
  let totalPrice = 0;
  for (let item of cartItems) {
    totalPrice += item.price;
  }
  return totalPrice;
}

// Add some items to the cart
addToCart("Shirt", 20);
addToCart("Jeans", 30);
addToCart("Shoes", 50);

// Calculate and display the total price
let totalPrice = calculateTotalPrice();
console.log("Total Price:", totalPrice); // Output 100.
