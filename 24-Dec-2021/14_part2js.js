// (function () {
//   let num = 10;
//   while(num != 0){
//       setInterval(function(){
//           console.log(num);
//           num--;
//       }, 1000);
//   }
// })();

//setTimeout runs only once

// setTimeout(function(){
//     let num = 10;
//     while(num != 0){
//         console.log(num);
//         num--;
//     }
// }, 1000)

//we need to use setInterval and setIntervals returns id which can be used to clearInterval
(function(){
    let time = parseInt(prompt("How much to count?"));
    let interval = parseInt(prompt("intervals"));
    //calls the handleCall function after interval seconds(passed as millis)
    //setInterval returns id which is used to 
    let iid = setInterval(handleCalls, interval * 1000);
    //returns an id used to stop calling via clearInterval
    let orgTime = time;

    // handleCalls.orgTU = time; // functions can be usedd as a store of properties(much like objects)
    //to save preseeve time 
    function handleCalls(){
        console.log(time + " left");
        time -= interval;

        if(time == 0){
            clearInterval(iid);
            // alert(time +  " has been counted");//wrong
            alert(handleCalls.orgTU +  " has been counted");//wrong
            alert(orgTime + " has been counted");
            
        }
    }

})()
