//ques->
//rearrange array in such a way that all even elements will be at front and 
//all odd elements are at back

let arr = [1,2,3,4,5,6,7,8,9,10];

//2nd method
// let ans = [];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         ans.unshift(arr[i]);
//     }else{
//         ans.push(arr[i]);
//     }
// }

// console.log(ans);

//2nd appraoch

let odd = [];
let even = [];
while(arr.length > 0){
    let val = arr.shift();
    if(val % 2 == 0){
        even.push(val);
    }else{
        odd.push(val);
    }
}

arr = even.concat(odd);
console.log(odd);
console.log(even);
console.log(arr);



