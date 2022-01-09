//if every cb returns true then EVERY returns true
//if any cb retturns false then EVERY return false
let data = [
    {name : "A", age : 14, gender : "M"},
    {name : "B", age : 34, gender : "M"},
    {name : "B", age : 30, gender : "F"},
    {name : "D", age : 24, gender : "F"},
    {name : "E", age : 44, gender : "M"},
    {name : "F", age : 28, gender : "F"},
    {name : "G", age : 36, gender : "M"},
    {name : "H", age : 26, gender : "F"}
];

//are all female candidates valid?

let areAllFVAlids = data.filter(c => c.gender == "F").every(fc => fc.age >= 20 && fc.age <= 30);
console.log(areAllFVAlids);