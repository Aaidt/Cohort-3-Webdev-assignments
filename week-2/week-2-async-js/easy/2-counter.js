// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter = 0;

function timeCount(){
    if (counter<50){
        counter++;
        console.log(`counter: ${counter}`)
        setTimeout(timeCount, 1000); // scheduling the next callback.
    }else{
        console.log('THe counter has reached its limit.');

    }
}
timeCount();




































































