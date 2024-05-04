// 1. Function Definition

// Function name are always written in camelCase
function myFunctionA(n) // n is a Formal Argument
{
    // function body
    console.log('Hello '+n+" How are you ?");

    // function returning something
    return n;
}
// 2. Function Calling
myFunctionA('Amit Kumar');  // Amit Kumar is a Actual Argument

// Arrow Function
// 1. Function Definition
let myFunctionC = (name)=>{
    console.log("Hello "+name+" Welcome");
}
// 2. Function Calling
myFunctionC("Lucky");

// Spread Operator
let a = ['Anil','Ram','Shyam'];
let b = [...a,'Ghanshyam','Rohit','Rahul'];
console.log(b);


// An arrow function expression is a compact alternative to a traditional
let x1 = ['An','arrow'];
let y = [...x1,"function"];
let z = [...y,"expression"];
let z2 = [...z,"is"];

console.log(z2);

let paragraph = '';
for(var i=0;i<z2.length;i++)
{
    console.log(z2[i]);
    paragraph=paragraph+z2[i];
}
console.log(paragraph);