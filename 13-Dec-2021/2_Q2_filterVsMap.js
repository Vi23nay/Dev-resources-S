let products = [
    {name : "T-shirt", price : 25},
    {name : "Headphones", price : 125},
    {name : "Keyboard", price : 75},
    {name : "Monitor", price : 200}
];
// all >= 100 -> uppercase 
//all <100 -> lowercase 

let ans = products.map(function(v){
    if(v.price >= 100){
        return v.name.toUpperCase();
    }else{
        return v.name.toLowerCase();
    }
})
console.log(ans);

//using arraw function
let ansArrow = products.map(v => v.price>=100 ? v.name.toUpperCase() : v.name.toLowerCase());
console.log(ansArrow);


//question -> return those products name in uppercase whose price < 100 
let sol = products.filter(v => v.price < 100).map(val => val.name.toUpperCase());
console.log(sol);