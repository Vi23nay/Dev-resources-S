// Map is itself a fn
// Map takes as input a callback fn 
// The callback fn takes 3 parameter (v, i, oarr)
// callback function can also take 1 parameter but maintain the ORDER
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v, i and original array to callback
// callback will process the value and index and return a single value
// Single value returned by each run of callback will be collected in a new array by map
// Map returns that new array
//callback function returns value or functionality which we provided
// length of returned array is equal to original array



let arr = [2, 5, 9, 8, 15, 11, 10];
let sqarr = arr.map(function(v, i, oarr){
    console.log(v + "@" + i + "=[" + oarr + "]");
    return v * v;
});

console.log(sqarr);