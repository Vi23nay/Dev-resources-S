// return cubes of values whose square <= 1000
let arr = [5, 83, 24, 67, 71, 12, 24, 7];


let ans = arr.filter(function(v){
    if(v * v <= 1000){
        return true;
    }
    return false;
}).map(function(v){
    return v*v*v;
})

console.log(ans);

let ans2 = arr.filter(v => v * v <= 1000).map(v => v * v * v);
console.log(ans2);

//gives cubes of number whose cubes are less that 10000

let sol = arr.map(v => v * v * v).filter(val => val <= 10000);
let sol2 = arr.filter(v => v * v * v <= 10000).map(val => val * val * val);//performance better -> filter reduces the size of array and after that map applied
console.log(sol); 
console.log(sol2); 