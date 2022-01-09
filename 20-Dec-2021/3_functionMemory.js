//memory for the functions are allocated before the code is executed
//functions in created in heap
//and there address are stored in stack 
//no function overloading in js
console.log("script started");

iamReal();

function iamReal(){
    console.log("i am real");
} 

function iamReal(){
    console.log("He isn't but i am real");
} 
function iamReal(hfdf){
    console.log("He isn't but i am real");
} 

iamReal();
