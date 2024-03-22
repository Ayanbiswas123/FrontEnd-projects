let arr = [];
let cartarr = [];
let info = [
    {
        id: "pic0",
        qty: 1,
        price: 1
    },
    {
        id: "pic1",
        qty: 1,
        price: 10
    },
    {
        id: "pic2",
        qty: 1,
        price: 20
    },
    {
        id: "pic3",
        qty: 1,
        price: 30
    },
    {
        id: "pic4",
        qty: 1,
        price: 40
    },
    {
        id: "pic5",
        qty: 1,
        price: 50
    },
    {
        id: "pic6",
        qty: 1,
        price: 60
    },
    {
        id: "pic7",
        qty: 1,
        price: 70
    },
    {
        id: "pic8",
        qty: 1,
        price: 80
    },
    {
        id: "pic9",
        qty: 1,
        price: 90
    },
    {
        id: "pic10",
        qty: 1,
        price: 10
    },
    {
        id: "pic11",
        qty: 1,
        price: 11
    },
    {
        id: "pic12",
        qty: 1,
        price: 12
    },
    {
        id: "pic13",
        qty: 1,
        price: 13
    },
    {
        id: "pic14",
        qty: 1,
        price: 14
    },
    {
        id: "pic15",
        qty: 1,
        price: 15
    },
    {
        id: "pic16",
        qty: 1,
        price: 16
    },
    {
        id: "pic17",
        qty: 1,
        price: 17
    },
    {
        id: "pic18",
        qty: 1,
        price: 18
    },
    {
        id: "pic19",
        qty: 1,
        price: 19
    },
    {
        id: "pic20",
        qty: 1,
        price: 200
    },
    {
        id: "pic21",
        qty: 1,
        price: 210
    },
    {
        id: "pic22",
        qty: 1,
        price: 220
    },
    {
        id: "pic23",
        qty: 1,
        price: 230
    },
]
function call(a) {

    // for(let i = 0; i <= cartarr.length; i++){
    //     if(a == cartarr[i].id){
    //         cartarr[i].cart_price +=cartarr[i].cart_price;
    //         cartarr[i].cart_qty +=cartarr[i].cart_qty;
    //     }
    //     arr.push(a);

    // }
    // load();
    // console.log(arr.length);
    let found = false;
    for (let i = 0; i < cartarr.length; i++) {
        if (a == cartarr[i].cart_id) {
            cartarr[i].cart_price += info.find(item => item.id === a).price;
            cartarr[i].cart_qty++;
            load();
            found = true;
            break; // Break the loop once the item is found and updated
        }
    }

    if (!found) {
        arr.push(a);
        add(a)
        load(); // Reload the cart items after adding a new item
    }

    console.log(arr.length);
}

// function add(a) {
//     for (let j = 0; j < info.length; j++) {

//         if (info[j].id == a) {
//             cartarr.push({           //it is also correct
//                 cart_id:info[j].id,
//                 cart_price:info[j].price,
//                 cart_qty:info[j].qty,
//             })
//         }
//     }
// }
function add(a) {
    const item = info.find(item => item.id === a);
    if (item) {
        cartarr.push({
            cart_id: item.id,
            cart_price: item.price,
            cart_qty: item.qty // Fixed duplication of cart_price
        });
    }
}


function load() {
    let ul = document.getElementById("right-main-ul");
    ul.innerHTML = ""
    for (let i = 0; i < cartarr.length; i++) {

        let ul = document.getElementById("right-main-ul");
        let li = document.createElement("li");
        li.innerHTML = `<img src="./picture/${cartarr[i].cart_id}.jpg" alt="image not found">
                        <span>₹ ${cartarr[i].cart_price}</span>
                        <span>${cartarr[i].cart_qty}</span>
                        <span><i class="fa-solid fa-circle-minus"></i></span>`

        ul.appendChild(li);
        total_amount();
    }
    for (let z = 0; z < cartarr.length; z++) {
        console.log(cartarr[z]);
    }

}
let total = document.getElementById("total");
let pay = document.getElementById("pay");

function total_amount(){
    let sum = 0;
    for(let i = 0; i < cartarr.length; i++){
        sum = sum + cartarr[i].cart_price
       total.innerText = `Total : ₹ ${sum} `
    }
}
function call2x(){

    cartarr.forEach((item) =>{
        item.cart_qty *= 2;
        item.cart_price *= item.cart_qty;
    })
    load();
}


document.getElementById("total-2x").addEventListener("click", call2x);





