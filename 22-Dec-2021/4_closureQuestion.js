// function outer() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }

//   return arr;
// }

// console.log("Before calling outer");
// var arr = outer();
// arr[0]();//3
// arr[1]();//3
// arr[2]();//3
// console.log("After calling outer");



//solution 2 -> to get 0,1,2 without using let
//j created again n again -> 3times
// i -> closure ✔️
// j -> closure X
function outer() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        function inner(){
            // j ke liye bar bar alag s variable bn rha h
            var j = i;
            return function(){
                console.log(j);
                // j++;//no faeda qki baar baar j k lie memory allocate hogi....j = undefined -> 3times
                // console.log(i);
            }
        }
        arr.push(inner());
    }
    
    return arr;
}
console.log("Before calling outer");
var arr = outer();
arr[0]();//0
arr[1]();//1
arr[2]();//2
console.log("After calling outer");