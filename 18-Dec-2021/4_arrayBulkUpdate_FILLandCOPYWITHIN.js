//fill
let arr = [10, 20, 30, 40, 50, 60, 70];
arr.fill(5, 1, 4);//fill 5 from idx 1 -> 3
console.log(arr);

arr.fill(7, 2);//fill 7 from idx 2 -> end
console.log(arr);

arr.fill(8);//fill all elems with 8
console.log(arr);


//copyWithin
let arr1 = [10, 20, 30, 40, 50, 60];
arr1.copyWithin(2, 4, 6);//copy val of 4 -> 5 and update val from 2 idx
console.log(arr1);

let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
arr2.copyWithin(3, 0, 4);//copy val from 0 -> 3 and update values from 3idx
console.log(arr2);

