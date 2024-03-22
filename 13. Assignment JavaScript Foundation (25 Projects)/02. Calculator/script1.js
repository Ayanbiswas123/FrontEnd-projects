function cal() {
    // Retrieve the input values and operator from the form
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let sym = document.getElementById("symbol").value;
    
    // Get the result element
    let result = document.getElementById("result");
    let out = 0;

    // Use a switch statement to perform the appropriate calculation based on the operator
    switch (sym) {
        case "+":
            out = num1 + num2;
            break; // Don't forget to break after each case to prevent fall-through

        case "-":
            out = num1 - num2;
            break;

        case "x":
            out = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                out = "Number cannot be divided by 0";
            } else {
                out = num1 / num2;
            }
            break;

        default:
            out = "Select the Right Operator";
    }

    // Update the result element with the calculated value or error message
    result.innerText = out;
}
