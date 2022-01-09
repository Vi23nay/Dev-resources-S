function enterFirstName(first){
    return function enterLastName(last){
        return function enterAge(age){
            return function printDetails(){
                console.log("Your name is " + first + " " + last + " and age is " + age);
            }
        }
    }
}


// enterFirstName("Vinay")("Singh")("21")();

console.log("Kindly enter your first name");
let enterLastName = enterFirstName("Vinay");
console.log("kindly enter your last name");
let enterAge = enterLastName("Singh");
console.log("kindly enter your age");
let printDetails = enterAge(21);

console.log("Doing random stuff");
printDetails();
