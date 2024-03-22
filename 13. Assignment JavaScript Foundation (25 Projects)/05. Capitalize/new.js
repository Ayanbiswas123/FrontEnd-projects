

// b.push("ayan")
// console.log(a.length)
// let c = a.toUpperCase();
// console.log(c)

/*function call(){
let out1 = document.getElementById("out");
let input = String(document.getElementById("input").value);
let b = new Array();


 for( let i = 0; i <input.length;i++){

     b.push(input[i]); 
   
 }
 b[0] = input[0].toUpperCase()
 let out = String(b);
 out = out.replace(/,/g, '');
 //console.log(typeof out)
 //console.log(out)
let t = input[0].toUpperCase() === input[0] ? out1.innerText = input :out1.innerText = out + " 1";
}*/


function call(){
    let out1 = document.getElementById("out");
    let input = String(document.getElementById("input").value);
    let b = input[0].toUpperCase() + input.slice(1);
   
    let t = input[0].toUpperCase() === input[0] ? out1.innerText = input :out1.innerText = b;
    }