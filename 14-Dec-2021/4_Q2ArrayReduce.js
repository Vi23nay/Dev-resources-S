//flatten the 2d array
let arr2D = [[2, 8, 10], [34], [45, 31, 25, 64, 72, 88], [], [25, 73]];

let arr = arr2D.reduce(function (pv, cv, i, oarr){
    
    for(let i = 0 ; i < cv.length; i++){
        pv.push(cv[i]);
    }
    return pv;
}, [])

let sol2 = arr2D.reduce(function (pv, cv, i, oarr){
    let narr = pv.concat(cv);
    return narr;
}, [])

console.log(sol2);