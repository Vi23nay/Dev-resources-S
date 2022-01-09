Array.prototype.myEvery = function(cb){
    let oarr = this;
    for(let i = 0; i < oarr.length; i++) {
        let val = oarr[i];
        let rv = cb(val, i, oarr);
        if(rv == false){
            return false;
        }
    }
    return true;
}
let data = [
    {name : "A", age : 14, gender : "M"},
    {name : "B", age : 34, gender : "M"},
    {name : "B", age : 30, gender : "F"},
    {name : "D", age : 24, gender : "F"},
    {name : "E", age : 44, gender : "M"},
    {name : "F", age : 28, gender : "F"},
    {name : "G", age : 36, gender : "M"},
    {name : "H", age : 36, gender : "F"}
];

//are all female candidates valid?

let areAllFVAlids = data.filter(c => c.gender == "F").myEvery(fc => fc.age >= 20 && fc.age <= 30);
console.log(areAllFVAlids);