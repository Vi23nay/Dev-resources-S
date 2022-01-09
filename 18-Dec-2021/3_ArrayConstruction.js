let arr1 = [10, 20, 30];
console.log(arr1);
//static functions
let arr2 = Array.of(10);
console.log(arr2);

let arr3 = Array.of(10, 20, 30);
console.log(arr3);

let arr4 = Array.from("sumeet");//array like  objects (for instance strings, nodelist, arguments)-> for converting these types of intances in arrays
console.log(arr4);

let arr5 = arr4.map(ch => ch.charCodeAt(0) + 1);
console.log(arr5);

let arr6 = arr5.map(val => String.fromCharCode(val))
console.log(arr6);

let string = arr6.join("");
console.log(string);