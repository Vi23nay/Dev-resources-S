////////////////////////////////////////////EX-1//////////////////////////////////////////////////

function powerCreator(exp){
    if(typeof exp !== 'number'){
        console.log("exp must be a number.");
        return null;
    }
    let powerFun = function(base){
        let rv = Math.pow(base, exp);
        return rv;
    }
    return powerFun;
}

let squarer = powerCreator(2);
let sq8 = squarer(8);
console.log(sq8);

