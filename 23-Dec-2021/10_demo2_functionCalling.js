function fun(a, b){
    console.log(a + " " + b);
    console.log(arguments);//arguments is not an array but we can make it array using Array.from(arguments)
    // console.log(arguments.length);
    let res = Array.from(arguments);//making arguments -> array
    let sq = res.map(x => x * x);
    console.log(sq);
}

fun();
fun(10);
fun(10, 20);
fun(10, 20, 30);

