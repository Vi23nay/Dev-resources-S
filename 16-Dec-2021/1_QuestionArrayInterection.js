let a1 = [10, 30, 50, 60, 70, 80];
let a2 = [10, 80, 100, 110];

let inter = a1.filter(v => a2.includes(v));
console.log(inter);


// QUESTION_2
// *********************************************************************************************************
let arr2D = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60],//50, 90, 100, 60
    [10, 51, 70, 80, 90, 100, 30, 60],//90, 100, 60
    [11, 50, 75, 85, 92, 100, 34, 60],//100, 60
    [10, 50, 70, 80, 90, 100, 30, 60],//100, 60
];

let interSect2D = arr2D[0].filter(v => arr2D[1].includes(v))
.filter(v => arr2D[2].includes(v))
.filter(v => arr2D[3].includes(v))
.filter(v => arr2D[4].includes(v));

console.log(interSect2D);


let way2 = arr2D.reduce(function(pv, cv, i, oarr){
    console.log(pv + "@@" + cv);
    let inter = pv.filter(v => cv.includes(v));
    return inter;
})
console.log(way2);

// [10,50,70,80,90,100,30,60]    [11,50,75,85,90,100,34,60]
// [50,90,100,60]   [10,51,70,80,90,100,30,60]
// [90,100,60]   [11,50,75,85,92,100,34,60]
// [100,60]   [10,50,70,80,90,100,30,60]