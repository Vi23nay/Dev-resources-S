//
function fn(param1, param2) {
    console.log(arguments);//predefined
    console.log("Inside fn", param1, param2);
}

fn("hello", "hi");
fn("hello");
fn();
fn("hello", "hi", "bye");
