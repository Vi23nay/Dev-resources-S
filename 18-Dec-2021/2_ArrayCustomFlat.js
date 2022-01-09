Array.prototype.myFlat = function(num){
    let oarr = this;
    if(num > 0){
        let res = [];
        customFlat(oarr, num, res);
        return res;
    }
}

function customFlat(node, td, res){
    if(Array.isArray(node)){
        if(td > 0){
            for(let i = 0; i < node.length; i++){
                customFlat(node[i], td - 1, res);
            }
        }else{
            for(let i = 0; i < node.length; i++){
                res.push(node[i]);
            }
        }
    }
    else{
        res.push(node);
    }
}
let arr = [10, 20, [50, 60, [90, 100]], 30, [70, [110, 120], 80], 40];
let res2 = arr.flat(2);
console.log(res2);
let myFlatRes = arr.myFlat(2);
console.log(myFlatRes);

let res3 = arr.flat(1);
console.log(res3);
let myFlatRes3 = arr.myFlat(1);
console.log(myFlatRes3);