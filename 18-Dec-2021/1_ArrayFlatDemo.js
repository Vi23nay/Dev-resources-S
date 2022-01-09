let arr = [10, 20, [50, 60, [90, 100]], 30, [70, [110, 120], 80], 40];

let res0 = arr.flat(0);//same arr return
// console.log(res0);

let res1 = arr.flat(1);//[ 10, 20, 50, 60, [ 90, 100 ], 30, 70, [ 110, 120 ], 80, 40 ] => arr.flat();
// console.log(res1);

let res2 = arr.flat(2);
// console.log(res2);

let res3 = arr.flat(10);
// console.log(res3);


let arr2 = [10, 20, [30, [50, [70, 80, 90], 60],40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110];
let ans0 = arr2.flat(0);//same as arr2
let ans1 = arr2.flat(); //-> arr2.flat(1);
// [10, 20, 30, [50, [70, 80, 90], 60],40, 100, 120, [150, [170, 180, 190], 160], 140, 200, 110];
let ans2 = arr2.flat(2);
// [10, 20, 30, 50, [70, 80, 90], 60,40, 100, 120, 150, [170, 180, 190], 160, 140, 200, 110];
let ans3 = arr2.flat(3); 
// [10, 20, 30, 50, 70, 80, 90, 60,40, 100, 120, 150, 170, 180, 190, 160, 140, 200, 110];
let flatFullyArray = arr2.flat(Infinity);

console.log(ans0);
console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(flatFullyArray);