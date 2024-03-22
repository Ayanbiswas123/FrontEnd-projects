const cart = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 15 },
    { name: 'Item 2', price: 15 },
    // Add more items here
  ];
  
  let newarray = [];
  for (let i = 0; i < cart.length; i++) {
      let itemName = cart[i].name;
      if (!newarray.some(item => item.name === itemName)) {
          newarray.push(cart[i]);
      }
  }
  console.log(newarray);
  