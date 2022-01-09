// Task : change powerCreator such that
// to make it a producer of such functions and
// whose exponent we can change on a later date
// function powerCreator(exp){
//     let fun = function(base){
//         let rv = Math.pow(base, exp);
//         return rv;
//     }
//     return fun;
// }

// let squarer = powerCreator(2);
// let val = squarer(8);
// console.log(val);

// Sol ->
//pass expression using object
function powerCreator(obj){
    let fun = function(base){
        let rv = Math.pow(base, obj.exp);
        return rv;
    }
    return fun;
}

let ob = {
    exp : 2,
};

let squarer = powerCreator(ob);
let val = squarer(8);
console.log(val);

ob.exp = 3;
let val2 = squarer(7);
console.log(val2);