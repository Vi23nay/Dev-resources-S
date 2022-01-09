let str =
  `My name is Sumeet Malik. I am a software developer. I believe in learning via doing. I need courage and patience`;

let arr = str.split(". ");
console.log(arr);
let ans = arr.reduce(function(pv, cv, i, oarr){
    let str = cv;
    let strArr = str.split(" ");
    strArr.reverse();

    let strReverse = strArr.reduce(function(pvr, cvr){
        return pvr + cvr + " ";
    }, "");
    
    let removeLastSpaceStr = strReverse.slice(0, strReverse.length - 1);
    return pv + removeLastSpaceStr  + ". ";
},"")

console.log(ans);

//by sumeet sir

let res1 = str.split(".");
console.log(res1);

let res2 = res1.filter(s => s.length > 0);
console.log(res2);

let res3 = res2.map(s => s.trim());
console.log(res3);

let res4 = res3.map(s => s.split(" "));
console.log(res4);

res4.forEach(function(a){//here we can use map but map need return statement while forEach only perform actions
    a.reverse();
})
console.log(res4);

let res5 = res4.map(a => a.join(" "));
console.log(res5);

let res6 = res5.map(s => s + ".");
console.log(res6);

let res7 = res6.reduce(function(pv, cv){
    return pv + " " + cv;
})

console.log(res7);
