//change in actual array

let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let narr = [20, 54, 12, 33, 98, 76, 100, 11, 291, 34];

// sort and reverse
sarr.sort();
console.log(sarr);

sarr.reverse();
console.log(sarr);


console.log(narr.sort());// wrong -> alphabetically sort
//it does an alphabetically sort
// [
//     100, 11, 12, 20, 291,
//      33, 34, 54, 76,  98
//   ]
// console.log(arr.sort().reverse());

//correct sort
narr.sort((a, b) => a - b);//numerical sort -> ascending order
console.log(narr.reverse());
console.log(narr);