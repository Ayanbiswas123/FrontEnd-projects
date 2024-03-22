let arr = [
    {
        model: "Economy",
        price: 4000
    },
    {
        model: "Midsize",
        price: 10000
    },
    {
        model: "Luxury",
        price: 20000
    }
]
let car = document.getElementById("cars")
let days = document.getElementById("days")
let btn = document.getElementById("btn")
let totalvalue = document.getElementById("totalvalue")
let totalDays = 0;

btn.addEventListener('click', () => {
    let seletedCar = car.value;
    totalDays = parseInt(days.value);
    if (!isNaN(totalDays)) {
        arr.map((val) => {
            if (val.model === seletedCar) {

                totalvalue.innerText = `₹ ${val.price * totalDays}`;
                console.log(totalvalue.value);
            }
        })
    } else {
        alert("Please enter a valid number of days.");
    }




})

console.log(arr);