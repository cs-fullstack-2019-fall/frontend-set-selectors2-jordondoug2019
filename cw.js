let num1=document.getElementById("first");
console.log(num1.innerText);

let num1a=document.getElementsByClassName("special");
console.log(num1a[0].innerText);

let num1b=document.getElementsByTagName("p");
console.log(num1b[0].innerText);

//Number 2
console.log(document.querySelector("p.special"));
// console.log(document.querySelectorAll("p special"));
console.log(document.querySelectorAll("p.special")[0]);
//selectorAll runs as an Array and to iterate through, use for Loop

//NUmber 3
let h=document.getElementsByTagName("h1");
h[0].style.color="blue";

//Number 4
let p= document.getElementById("last");
p.style.color="yellow";