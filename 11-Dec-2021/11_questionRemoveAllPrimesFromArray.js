let arr = [2,4,7,9, 13, 12, 18, 19, 51, 27, 36, 53];

for(let i = arr.length - 1; i >= 0; i--){
    let val = arr[i];
    if(isPrime(val) == true){
        arr.splice(i, 1);
    }
} 

displayArray(arr);

function isPrime(val){
    for(let j = 2; j * j <= val ; j++){
        if(val % j == 0){
            return false;
        }
    }
    return true;
}
function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
