/*************************VAR**************************/  
// --> reassign
// --> functional scope
// --> redeclare
// --> you can access a var variable before declaration


// console.log(a);
// var a;
// console.log(a);
// a = 10;
// console.log(a);
// var a;
// console.log(a);//not undefined
// a = 20;
// console.log(a);


/***************************************LET*********************************************/
// -> can't access before declaration ->> ERROR
// -> block level
//can't declare again n again
// console.log(a); // -> error can't use before declaration
// let a;
// console.log(a);
// a = 10;
// console.log(a);
// let a;// can't declare again n again -> error
// console.log(a);
// a = 20;
// console.log(a);

/******************************************************************************/
// Error -> 
var a;
let a;
a = 10;
console.log(a); 
