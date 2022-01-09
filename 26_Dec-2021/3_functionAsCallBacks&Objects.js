let fs = require('fs');
function primeSieve(phandler, nphandler) {
    let oarr = this;
    for(let i = 0; i < oarr.length; i++) {
        let num = oarr[i];
        
        let isPrime = true;
        for(let div = 2; div * div <= num; div++){
            if(num % div == 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            phandler(num);
        }else{
            nphandler(num);
        }
    }
}

Array.prototype.sieve = primeSieve;

let arr = [11, 15, 54, 24, 68, 89, 91, 34, 73, 91, 94];
arr.sieve(logAllPrimes, logAllNonPrimes);

function logAllPrimes(num){
    fs.appendFileSync("primes.txt", num + "->");
}
function logAllNonPrimes(num){
    fs.appendFileSync("non-primes.txt", num + "->");
}