/////////////////////execution context
// console.log("Before declaration 2", a);//undefined
// var a;
// console.log("After declaration 4", a);//undefined
// a = 10;
// console.log("After declaration 6", a);//10

// function fn(){
//     console.log("Before declaration 9", a);
//     var a;
//     console.log("After declaration 11", a);
//     a = 20;
//     console.log("After declaration 13", a);
// }

// fn();

/*********************************************************************************************************/
// var a;
// function fn(){
//     console.log("20", a);
//         var a;
//         console.log("22", a);
//         a = 20;
//         if(true){
//             var a = 30;
//             console.log("26", a);
//         }

//         console.log("After declaration 29", a);
// }
// a = 20;
// fn();

/***************************************************************************************************/
var a;
function fn(){
    console.log("20", a);
        // var a;
        console.log("22", a);
        a = 20;
        if(true){
            // var a = 30;
            a = 30;
            console.log("26", a);
        }

        console.log("After declaration 29", a);
}
a = 20;
fn();


/*********************************************************************************************************/
// var a;
// function fn2(){
//     console.log("20", a);
//         var a;
//         console.log("22", a);
//         a = 20;
//         if(true){
//             let a = 30;
//             console.log("26", a);
//         }

//         console.log("After declaration 29", a);
// }
// a = 20;
// fn2();