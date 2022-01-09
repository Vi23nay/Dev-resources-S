Array.prototype.mySome = function(cb){
    let oarr = this;
    for(let i = 0; i < oarr.length; i++){
        let rv = cb(oarr[i], i, oarr[i]);
        if(rv == true){
            return true;
        }
    }
    return false;

}
let data = [
    {name : "A", age : 14, gender : "M"},
    {name : "B", age : 34, gender : "M"},
    {name : "B", age : 34, gender : "F"},
    {name : "D", age : 44, gender : "F"},
    {name : "E", age : 44, gender : "M"},
    {name : "F", age : 28, gender : "F"},
    {name : "G", age : 36, gender : "M"},
    {name : "H", age : 47, gender : "F"}
];
let isThereAValidCandidate = data.mySome(val => val.gender == "F" && val.age >= 20 && val.age <= 30);

console.log(isThereAValidCandidate);