/*
    Write a function that returns a promise that resolves after n seconds have passed, 
    where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve("done."), n);
    });
}

async function ans(){
    const sol = await wait(2000);
    console.log(sol);
}
ans();


module.exports = wait;
