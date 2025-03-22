let x: number = 1
console.log(x);

function greet(firstName: string | number) {
    console.log(`Hello ${firstName}`);
}
greet(1);
greet("aadit");

function sum(a: number, b: number): number {
    return a + b
}

let ans = sum(1,2);
console.log(ans);

function isLegal(age: number){
    if(age>18){
        return true
    }else{
        return false
    }
}
console.log(isLegal(19))

function delayedCall(fn: (() => string) | ((a: number) => number)){
    setTimeout(fn, 1000);
}

delayedCall(function(){
    console.log("hello");
    return 1;
})

