//ages of all the ladies -> [24, 44, 28, 47]
let arr = [
    {name:"A", age:14, gender:"M"},
    {name:"B", age:34, gender:"M"},
    {name:"C", age:24, gender:"F"},
    {name:"D", age:44, gender:"F"},
    {name:"E", age:44, gender:"M"},
    {name:"F", age:28, gender:"F"},
    {name:"G", age:36, gender:"M"},
    {name:"H", age:47, gender:"F"},
];
//first filter out females and then using map add ages of females in ansArr
let ans = arr.filter((val, i, oarr) => {
    if(val.gender == "F"){
        return true;
    }
}).map((val) => {
    return val.age;
})

console.log(ans);

// *******************************************************************************************
let ans2 = arr.filter((val, i, oarr) => val.gender == "M").map((val) => {
    return val.age;
})

console.log(ans2);

// ***********************************************************************************

let females = arr.filter((val, i, oarr) => {
    if(val.gender == "F"){
        return true;
    }
})

let fages = females.map(function(val, i, oarr){
    return val.age;
}
)
console.log(fages);