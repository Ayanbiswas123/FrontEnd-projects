// Initialize the shopping cart as an empty array.
const cart = [];


// Function to add items to the shopping cart.
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

// Function to update the cart's displayed items and total price.
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Clear the existing cart items.
    cartItems.innerHTML = "";
    let total = 0;
    // Iterate through the cart array and update the cart display.
    for (const item of cart) {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        
        total += item.price;
    }

    // Update the cart's total price.
    cartTotal.textContent = total;
    
}
/*function removeDuplicates(array) {
    return [...new Set(array.map(JSON.stringify))].map(JSON.parse);
    
  }*/
  
  function removeDuplicates(array) {
    let newarray = [];
    for (let i = 0; i < array.length; i++) {
      let itemName = array[i].name;
      if (!newarray.some(item => item.name === itemName)) {
          newarray.push(cart[i]);
      }
      
  }
  return newarray;
}
  function print() {
    const uniqueCart = removeDuplicates(cart);
  
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
  


    // Clear the existing cart items.
    cartItems.innerHTML = "";
    let total = 0;
    // Iterate through the cart array and update the cart display.
    for (const item of uniqueCart) {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        
        total += item.price;
    }

    // Update the cart's total price.
    cartTotal.textContent = total;
    cart.splice(0,cart.length);
   for(let i = 0; i < uniqueCart.length; i++){

        cart.push(uniqueCart[i]);
   }

    
}
