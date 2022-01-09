// Use the map function to produce the below output
// return an array with true and false for females between 20 and 30
// let us say xyz corp wants to hire females between age >= 20 and <= 30
let arr = [
    {
        gender: 'M',
        age: 24
    },
    {
        gender: 'F',
        age: 34
    },
    {
        gender: 'F',
        age: 28
    },
    {
        gender: 'M',
        age: 74
    },
    {
        gender: 'F',
        age: 31
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 26
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 47
    },
    {
        gender: 'F',
        age: 19
    },
    {
        gender: 'M',
        age: 20
    }
];

let shortListed = arr.map(function(obj, i, oarr){
    let gender = obj.gender;
    let age = obj.age;
    if(gender == "F" && age >= 20 && age <= 30){
        return true;
    }
    return false;
})

console.log(shortListed);
// ****************************************************************************************************************************
let sl2 = arr.map((obj, i, oarr) => obj.gender == "F" && obj.age >= 20 && obj.age <= 30);
console.log(sl2);

// ****************************************************************************************************************************
let sl3 = arr.map((obj, i, oarr) => {
    return obj.gender == "F" && obj.age >= 20 && obj.age <= 30
});
console.log(sl3);

