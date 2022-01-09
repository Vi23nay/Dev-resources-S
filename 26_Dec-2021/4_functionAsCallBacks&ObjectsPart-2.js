let fs = require('fs');
function primeSieve(phandler, nphandler) {
    let oarr = this;
    phandler.calledForTheFirstTime = true;
    nphandler.calledForTheFirstTime = true;
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
    return this;//for chaining and call more function
}

Array.prototype.sieve = primeSieve;

let arr = [11, 15, 54, 24, 68, 89, 91, 34, 73, 91, 94];
arr.sieve(logAllPrimes, logAllNonPrimes);

function logAllPrimes(num){
    if(logAllPrimes.calledForTheFirstTime == true){
        if(fs.existsSync("primes.txt") == true){
            fs.rmSync("primes.txt");
        }
    }

    logAllPrimes.calledForTheFirstTime = false;
    fs.appendFileSync("primes.txt", num + "=>");
}
function logAllNonPrimes(num){
    if(logAllNonPrimes.calledForTheFirstTime == true){
        if(fs.existsSync("non-primes.txt") == true){
            fs.rmSync("non-primes.txt");
        }
    }

    logAllNonPrimes.calledForTheFirstTime = false;
    fs.appendFileSync("non-primes.txt", num + "=>");
}