// console.log(a);///error -> a is not defined

function fun(){
    // let a = 10;//error -> let is block scope
    // var a = 10;//error
    // this.a = 10,//store in global/window
    a = 10;//now a will store in global/window
    console.log(a);
}

fun();
console.log(a);