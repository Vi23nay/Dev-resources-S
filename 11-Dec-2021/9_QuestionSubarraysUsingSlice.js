//print all subarrays of array using slice
let arr = [10, 20, 30, 40];

for(let i = 0; i < arr.length; i++) {

    for(let j = i; j < arr.length; j++){
        let sa = arr.slice(i,j + 1);
        displayArray(sa);
    }
}

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}