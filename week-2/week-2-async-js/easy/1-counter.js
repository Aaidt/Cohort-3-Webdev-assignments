// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second 


let counter = 0;

const intervalTimer = setInterval(() => {
    if(counter < 100){
        console.log(counter);
        counter++;
    }else{
        console.log("The counter has hit 100.")
        clearInterval(intervalTimer);
    }
}, 1000);