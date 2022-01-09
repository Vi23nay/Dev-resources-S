let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34]
    [10, 51, 70, 80, 90, 100, 30, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51]
    [11, 50, 75, 85, 92, 100, 34, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92]
    [10, 50, 70, 80, 90, 100, 30, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92]
];

// [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92] (union of arrays)

let sol = arr2d.reduce(function(pv, cv, i, oarr){
    let valuesNotIncludedInPv = cv.filter(function(v){//this will find unions
        if(pv.includes(v) == false){
            return true;
        }
    })
    let union = pv.concat(valuesNotIncludedInPv);
    return union;//here we are concattinating our union with pv
});
console.log(sol);

let sol2 = arr2d.reduce(function(pv, cv, i, oarr){
    let valuesNotIncludedInPv = cv.filter(v => !pv.includes(v));
    return pv.concat(valuesNotIncludedInPv);
})

console.log(sol2);