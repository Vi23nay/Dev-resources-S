// add a fn to all arrays which takes as input two callbacks
// one for small string (< 50(criteria) in length) and the other for long strings

// short string callback should do the following
// My name is Sumeet Malik. I am a teacher. I teach programming.
// => Malik Sumeet is name My. teacher a am I. programming teach I.

// long string callback should to the following
// I teach programming. I am a teacher. My name is Sumeet Malik.
Array.prototype.processStrings = function(sscb, lscb, criteria){//long string callback , short string callback
    let oarr = this;
    for(let i = 0; i < oarr.length; i++){
        let str = oarr[i];
        if(str.length > criteria){
            lscb(str);
        }else{
            sscb(str);
        }
    }
    return this;//important step in all -> add this to enable chaining
}
let arr = [
    "My name is Sumeet Malik. I am a teacher. I teach programming.",
    "India has gone to SA. India started well. But it rains.",
    "India won in Australia. England won't",
    "Lorem ipsum dolor. ipsum dolor lorem",
];
arr.processStrings(handleShortString, handleLongString, 40);

function handleShortString(str){
    let sarr = str.split(".");
    // console.log(sarr);
    let res2 = sarr.filter(s => s.length > 0);
    // console.log(res2);
    let res3 = res2.map(s => s.trim());
    // console.log(res3);
    let res4 = res3.map(s => s.split(" "));
    // console.log(res4);
    let res5 = res4.map(a => a.reverse());
    // console.log(res5);
    let res6 = res5.map(a => a.join(' '));
    // console.log(res6);
    let res7 = res6.join(". ");
    // console.log(res7);
    let res8 = res7 + ". ";
    console.log("short string : " + res8);
}

function handleLongString(str){
    let sarr = str.split(".");
    // console.log(sarr);
    let res2 = sarr.filter(s => s.length > 0);
    // console.log(res2);
    let res3 = res2.map(s => s.trim());
    // console.log(res3);
    let res4 = res3.reverse();
    // console.log(res4);
    let res5 = res4.join(". ");
    // console.log(res5);
    let res6 = res5 + ".";
    console.log("long string  : " + res6);





    
}