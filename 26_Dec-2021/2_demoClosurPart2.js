// Task : change powerCreator such that
// to make it a producer of such functions and
// whose exponent we can change on a later date

////////////////////////////////////////////EX-1//////////////////////////////////////////////////

function powerCreator(obj){
    if(typeof obj.exp !== 'number'){
        console.log("exp must be a number.");
        return null;
    }
    let powerFun = function(base){
        let rv = Math.pow(base, obj.exp);
        return rv;
    }
    return powerFun;
}
let ob = {
    exp : 2
}
let squarer = powerCreator(ob);
let sq8 = squarer(8);
console.log(sq8);


ob.exp = 3;
let co8 = squarer(8);
console.log(co8); 
//we are changing in obj...because in closure of squarer there is a address of obj so we can change data(exp) of obj