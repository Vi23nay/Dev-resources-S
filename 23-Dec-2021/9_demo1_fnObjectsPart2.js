obj.fun1();
obj.fun2();
obj.fun3();


let obj = {
    fun1 : function(){
        console.log("I am " + this.fullName + ". my age is " + this.age);
    },
    fun2 : function(){
        console.log("I am " + obj.fullName + ". my age is " + obj.age);
    },
    fun3 : function(){
        console.log("I am " + fullName + ". my age is " + age);
    },
    fullName: "Vinay Singh",
    age : 21
};