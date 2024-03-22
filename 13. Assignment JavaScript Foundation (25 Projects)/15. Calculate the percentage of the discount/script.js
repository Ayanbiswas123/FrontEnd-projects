let item_container = document.getElementById("select_item");
let btn = document.getElementById("btn");
let after_dis = document.getElementById("after_dis");
let arr1 = [
    {
        item: "pen",
        price: 10,
        discount: 2
    },
    {
        item: "copy",
        price: 100,
        discount: 2
    },
    {
        item: "Bottol",
        price: 150,
        discount: 23
    },
    {
        item: "Mobile",
        price: 10000,
        discount: 15
    },
    {
        item: "Laptop",
        price: 42000,
        discount: 20
    },
    {
        item: "Speaker",
        price: 699,
        discount: 7
    }
]
arr1.forEach((value) => {
    let a = `<option >${value.item} ₹ ${value.price} & Discount ${value.discount} %</option>`
    //console.log(a);
    item_container.innerHTML += a;
})

btn.addEventListener("click", () => {
    let a = item_container.value.split(" ")
    let total = ((100-parseInt(a[5]))/100)*parseInt(a[2]);
    after_dis.innerText = `After discount Price of ${a[0]} is ${total}`
    console.log(total);

})
