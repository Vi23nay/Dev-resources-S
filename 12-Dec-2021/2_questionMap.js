//use the map function 
// Use the map function to produce the below output
//["S.M.", "A.M.", "I.M.", "D.M.", "K.M.", "A.M."];
let arr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Kunal Malik",
    "Aryan Malik"    
];

let ans = arr.map(function(v, i, oarr){
    let name = v.split(" ");
    let rv = name[0][0] + "." + name[1][0] + ".";
    return rv;
})

console.log(ans);

//summet sir way -> clean
// let res = arr.map(function(v, i, oarr){
//     let nameParts = v.split(" ");
//     let fname = nameParts[0];
//     let lname = nameParts[1];
    
//     let fnfc = fname[0];
//     let lnfc = lname[0];
//     let initials = fnfc + "." + lnfc + ".";
//     return initials;
// });

// console.log(res);