// //fn defination
// function fn(param){
//     console.log("i am function defination", param);
// }

//boolean -> value
// fn(true);

//string -> address pass
// fn("hello");

//object -> address pass
// let obj = {name : "vinay"};
// fn(obj);

//array -> address pass
// fn([1, 2, 3]);


/*********************************************************************************************************************************/
function fn(param){
    console.log("i am function defination", param);
    // execute chota fn
    param();
}

//functions are also variables -> functions are first citiens in js
function chotaFn(){
    console.log("I am chota fn");
}

//function can also be passed as an argument in function
fn(chotaFn);

/*************************************************************************************************************************/
// 1- function defination
function fn(){
    console.log("I am function defination");
}

fn();
//variable assignment
let a = [10, 20, 30];
let b = a;
console.log(b);

/******************************************************************************************************************************/ 
//2 -> function expression
let secondName = function originalName(){
    console.log("I am expression");
}

secondName();
// originalName();//can't be used here because secondName me initailize h ab

/******************************************************************************************************************************/ 
//3 - IIFEE -> Immediately Invoked Function Expression
console.log("before");
(function drawBoard(){
    console.log("board is drawn immediately");
})();
console.log("after");

/******************************************************************************************************************************/ 
//4 -. anonymus function -> function having no name
console.log("before");
(function (){
    console.log("board is drawn immediately");
})();
console.log("after");

let otherName = function (){
    console.log("I am expression2");
}

otherName();