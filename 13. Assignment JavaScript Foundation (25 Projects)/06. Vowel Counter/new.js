let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")

function call() {
    let name = document.getElementById("name").value;
    let out = document.getElementById("out");

    let count = 0;
    //console.log(name);
    for (let i = 0; i < name.length; i++) {
        let a = name[i].toUpperCase()
        if (a === "A" || a === "E" || a === "I" || a === "O" || a === "U") {
            count += 1;
            console.log(count, a);
        }

    }
    if (count > 0) {
        out.innerText = count;
    } else {
        out.innerText = "No Vowel Exist in the String";
    }


}
let name1 = document.getElementById("name");
let out1 = document.getElementById("out");
function call2() {

    name1.value = ""
    out1.innerText = "";

}

btn.addEventListener("click", call)
btn2.addEventListener("click", call2)