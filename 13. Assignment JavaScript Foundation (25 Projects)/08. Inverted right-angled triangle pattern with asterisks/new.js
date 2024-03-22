
let output = document.getElementById("output");
let btn1 = document.getElementById("btn");
let btn2 = document.getElementById("btn1");
let pattern = "";

function call(){
    let input = parseInt(document.getElementById("input").value);
    // output.innerText = input;

    for(let i = input; i > 0; i--){

        for(let j = i;j > 0; j--)
        {
            pattern += "*";
            console.log("*");
        }
        pattern +="<br>"
    }
    output.innerHTML = pattern;
}
btn1.addEventListener("click",call);