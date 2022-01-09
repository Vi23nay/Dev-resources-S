///some taakes each value 1 by 1 and returns true if any cb returns true
//returns false only if all cb returns false

//ques -> is there a valid candidate(F and between 20 and 30)
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

let isThereAValidCandidate = data.some(function(val, i, oarr){
    if(val.gender == "F" && val.age >= 20 && val.age <= 30){
        return true;
    }else{
        return false;
    }
})

console.log(isThereAValidCandidate);