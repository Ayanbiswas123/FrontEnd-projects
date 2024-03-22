let num = document.getElementById("num");
let btn1 = document.getElementById("btn1");
let arr = [];
let count = document.getElementById("count");
let out = document.getElementById("out");
let arr1 = [];
//let total_count = 0;

function call() {
    count.innerText = arr.length + 2;
    arr.push(parseInt(num.value))
    num.value = "";
    console.log(arr);
}

btn1.addEventListener("click", call)

function check(){

    for(let i = 0; i <= arr.length; i++){

        if(arr[i] % 3 == 0){
            arr1.push(arr[i]);
        }
    }
    out.innerText = "[ " + arr1 +", ]";
}
