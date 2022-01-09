// //1-functions are also treated as variables
// function outerFn(param){
//     console.log(param);
//     param();
// }

// function chotaFn(){
//     console.log("Hello Iam a chota fn");
// }
// ////function can be passed as a parameter to another function -> HIGHER ORDER FUNCTIONS
// outerFn(chotaFn);

// //2-function's reference can be stored in another variable

// let a = [1,2,3,4,5];
// let b = a;

// //function expression
// let anotherName = function(){
//     console.log("I am an expression");
// }
// anotherName();

// 3- function can also return function
// function fn(){
//     return "hello";
// }

// let rval = fn();
// console.log(rval);

////////////////////Example - II
function outer() {
    console.log("Hello i am outer and i am returning inner function");
    return function inner(){
        console.log("I am inner");
    }
}

let rVal = outer();
console.log(rVal);