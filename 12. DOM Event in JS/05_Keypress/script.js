let display = document.getElementById("display")
let input_box = document.getElementById("input-box")

input_box.addEventListener('keypress', (e) =>{

    display.innerText = "you have Pressed " + e.key;
})