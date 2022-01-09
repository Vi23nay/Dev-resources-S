//MAKE CUSTOM FILTER FUNCTION STE BY STEP
// Filter is itself a fn
// Filter takes as input a callback fn 

// The callback fn takes 3 parameter (v, i, oarr)
// filter will call the callback multiple times (once for each value)
// for each run of callback, filter will pass v, i and original array to callback

// callback will process the value and index and return a single boolean value for each call to it from filte
// Single value returned by each run of callback will be used by filter
// Whenever a true is received by filter (returned by callback) then filter adds the v to a new array
// Filter returns that new array
// length of returned array is equal to number of trues returned by callback 

Array.prototype.myFilter = function(cb){
    let oarr = this;
    let resArr = [];
    for(let i = 0; i < oarr.length; i++){
        let val = oarr[i];
        let booleanrv = cb(val, i, oarr);
        if(booleanrv == true){//only push in ans array when return value is true;
            resArr.push(val);
        }
    }
    return resArr;
}

let arr = [21,3443,43,43,44,23,23,234,3,43];

let oddArray = arr.myFilter(function(val, i, oarr){
    console.log(val+"@"+i+"["+oarr+"]");
    if(val % 2 == 1){
        return true;
    }else{
        return false;
    }
})

console.log(oddArray);