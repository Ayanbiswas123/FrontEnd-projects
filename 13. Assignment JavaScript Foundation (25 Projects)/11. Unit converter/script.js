
let Celsius = document.getElementById("Celsius")
let Fahrenheit = document.getElementById("Fahrenheit")
let btn = document.getElementById("btn")
let swapbtn = document.getElementById("swap")

swapbtn.addEventListener('click', () =>{
    if(Celsius.placeholder == "Celsius..."){
        if(Celsius.value != null){
            let a = Celsius.value
            Celsius.value = Fahrenheit.value
            Fahrenheit.value = a
        }
        Celsius.placeholder = "Fahrenheit..."
        Fahrenheit.placeholder = "Celsius..."
    }else{
        if(Fahrenheit.value != null){
            let b = Fahrenheit.value
            Fahrenheit.value = Celsius.value
            Celsius.value = b
        }
        Celsius.placeholder = "Celsius..."
        Fahrenheit.placeholder = "Fahrenheit..."
    }
    
})
btn.addEventListener('click', () =>{
    console.log("aaaa");

    if(Celsius.placeholder == "Celsius..."){
        let c = parseFloat(Celsius.value)
        let f = (9/5 * c) + 32
        Fahrenheit.value = f + "°F";
        console.log(f + "°F");
        //F = (9/5 × °C) + 32

    }else{
        let f = parseFloat(Celsius.value)
        let c = (f - 32) * 5/9;
        Fahrenheit.value = c + "°C"
        // C = (°F - 32) × 5/9
    }
})