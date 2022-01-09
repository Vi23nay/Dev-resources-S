//count all primes using reduce
let arr = [51, 23, 37, 44, 73, 82, 97, 45];

let ans = arr.reduce(function(pv, cv, i, oarr){
    console.log("prime found so far:" + pv + "and currently processing" + cv);
    if(isPrime(cv) == true){
        return pv + 1;
    }
    return pv;
}, 0)//i pass 0 here because i want my loop to run from starting

function isPrime(num) {
    for(let div = 2; div*div <= num; div++){
        if(num % div == 0) {
            return false;
        }
    }
    return true;
}
console.log(ans);

//0, 51
//0, 23
//1, 37// processing 37 and abhi tk 1 prime mila
//2, 44
//2, 73
//3, 82
//3, 97
//4, 45