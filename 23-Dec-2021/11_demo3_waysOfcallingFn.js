//summary -> call, apply, bind

// call is a function. it is available on all functions. it can be used to call the functions.
// the use case is, if you want to override the default this

// apply is similar to call. It just uses an array to pass arguments

// bind is dis-similar. It doesn't make a call. It gives you a new function to call.

let obj = {
    fun1 : function(frnd1, frnd2){
        console.log("This person is called " + this.fullName + ". His/Her age is " + this.age + ". ");
        console.log(this.fullName + " says hello to " + frnd1 + ".");
        console.log(this.fullName + " says hello to " + frnd2 + ".");
        console.log(arguments)
    },
    fullName: "Vinay Singh",
    age : 21,
};

////////////////////////////////////////////WAY 1
// obj.fun1("Nikhil", "paras");


////////////////////////////////////////////WAY 2 -> "call" funciton
obj.fun1.call({
    fullName: "Karishma",
    age : 22
}, "kajal", "vandana");
//call is a function. it is available on all functions. it can bew used to call the functions.
// the use case is, if you want to override the default "this" 
obj.fun1.call({
    fullName: "Karishma",
    // age : 22 => undefined dega ab age ki jgh qki this me ab obj nhi hai...call ki wjh s humne this change krdia
}, "kajal", "vandana", "Vinay");


let obj2 = {
    fullName: "Karishma",
    age : 22
}
obj.fun1.call(obj2, "Vinay", "Bittu");

////
// Function.prototype.myCall = function(obj, values){wrong h
//     for(let key in obj){
//         this.key = obj.key;
//     }
//     arguments.push(values);
// }

///////////////////WAY 3 => "apply" function -> similar like call bs here we are passing parameters as array
obj.fun1.apply(obj2, ["vinay", "Vinay2", "Vinay3"]);


// WAY 4 => "bind" function => returns another function which we can save and use it later on;
let boundFunction1 = obj.fun1.bind(obj2, "Vinay", "Nikhil", "paras");
boundFunction1("vandana");
let boundFunction2 = obj.fun1.bind(obj2, "Vinay", "Nikhil", "paras");
boundFunction2();
