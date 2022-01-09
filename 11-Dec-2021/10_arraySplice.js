//splice-change in original array and return removed values

let arr = [10, 20, 30, 40, 50];

let na = arr.splice(2, 1, 300, 400);//remove 1 element starting from idx 2 and add 300 and 400 in place of that

console.log(na);
displayArray(arr);
let na2 = arr.splice(2, 2, 300, 400, 500);//remove 2 element starting from idx 2 and add 300, 400 and 500 in place of that
console.log(na2);
displayArray(arr);


function displayArray(arr){
    console.log(arr + " = " + arr.length);
}