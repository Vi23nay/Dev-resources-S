//returns single value
let arr = [10, 20, 30, 40, 50, 60, 70];

let sum1 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + "-" + cv + "-" + ci);
    return pv + cv;
})

console.log(sum1);
console.log("--------------------");

let sum2 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + "-" + cv + "-" + ci);
    return pv + cv;
}, 5);

console.log(sum2);

