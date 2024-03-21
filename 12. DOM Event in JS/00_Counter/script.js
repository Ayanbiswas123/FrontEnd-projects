let incBtn = document.getElementById("incrementBTN")
let decBtn = document.getElementById("decrementBTN")
let resetBtn = document.getElementById("resetBTN")
let valueinc = document.getElementById("value")

incBtn.addEventListener('click', () =>{
    valueinc.innerText = parseInt(valueinc.innerText) + 1; 
})
decBtn.addEventListener('click', () =>{
    valueinc.innerText = parseInt(valueinc.innerText) - 1; 
})
resetBtn.addEventListener('click', () =>{
    valueinc.innerText = 0; 
})