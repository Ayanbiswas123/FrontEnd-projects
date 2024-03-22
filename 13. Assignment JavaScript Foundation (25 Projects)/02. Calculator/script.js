
function cal(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let sym = document.getElementById("symbol").value;
    let result = document.getElementById("result");
    let out = 0;

    switch (sym) {
        case "+": out = num1 + num2;
            break;
        case "-": out = num1 - num2;
            
            break;
        case "x": out = num1 * num2;
            
            break;
        case "/" : if(num2 <= 0){
                    out = "Number can not be devided by 0";
                  }else{
                    out = num1 / num2;
                }    
            break;    
        default: out = "Select the Right Operator"
    
            
    }
    result.innerText = out;
    
}