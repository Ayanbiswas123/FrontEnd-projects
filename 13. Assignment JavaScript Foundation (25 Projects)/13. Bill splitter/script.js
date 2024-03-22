// Define initial arrays and variables
let arr = [
    { pic: "./pic/pic1.jpg", price: 20 },
    { pic: "./pic/pic2.jpeg", price: 155 },
    { pic: "./pic/pic3.jpeg", price: 22 },
    { pic: "./pic/pic4.jpeg", price: 50 },
    { pic: "./pic/pic5.jpg", price: 60 },
    { pic: "./pic/pic6.jpeg", price: 120 },
    { pic: "./pic/pic7.jpeg", price: 90 }
];
let arr2 = [];
let ul = document.getElementById("item-ul");
let ul2 = document.getElementById("item-total");
let submit = document.getElementById("submit");
let inputdata = document.getElementById("inputdata");
let total = 0;

// Function to render initial item list
arr.forEach(value => {
    let a = `
        <li>
            <img src="${value.pic}" alt="image">
            <span>₹ ${value.price}</span>
            <span id="add" onclick="call('${value.pic}')">Add</span>
        </li>`;
    ul.innerHTML += a;
});

// Function to load items into cart
function item_List_loader() {
    ul2.innerHTML = "";
    total = 0;
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr2[i] == arr[j].pic) {
                total += arr[j].price;
                let a = `
                    <li class="lileft">
                        <img src="${arr[j].pic}" alt="image" id="img2">
                        <span id="price2">₹ ${arr[j].price}</span>
                        <span class="add2" onclick="del('${arr[j].pic}', arr2)">Deleted</span>
                    </li>`;
                ul2.innerHTML += a;
            }
        }
    }
}

// Function to add item to cart
function call(a) {
    arr2.push(a);
    console.log(arr2);
    item_List_loader();
}

// Event listener for total calculation
submit.addEventListener("click", function total_calculate() {
    let sum = total / parseInt(inputdata.value);
    document.getElementById("out").innerText = "Each Person Give = " + sum;
});

// Function to delete item from cart
function del(a, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] == a) {
            arr2.splice(i, 1);
            console.log(arr2[i]);
        }
    }
    item_List_loader();
}
