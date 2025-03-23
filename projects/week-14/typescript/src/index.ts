// let x: number = 1
// console.log(x);

// function greet(firstName: string | number) {
//     console.log(`Hello ${firstName}`);
// }
// greet(1);
// greet("aadit");

// function sum(a: number, b: number): number {
//     return a + b
// }

// let ans = sum(1,2);
// console.log(ans);

// function isLegal(age: number){
//     if(age>18){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isLegal(19))

// function delayedCall(fn: (() => string) | ((a: number) => number)){
//     setTimeout(fn, 1000);
// }

// delayedCall(function(){
//     console.log("hello");
//     return 1;
// })

// interface UserType {
//     name: string,
//     age: number
// }

// function hello(user: UserType){
//     console.log("hello" + user.age)
// }
// hello({
//     name:"aadit",
//     age: 21
// })

// interface Address {
//     address?: {
//         city: string,
//         pincode: number
//     }
// }

// interface User {
//     name: string,
//     age: number,
//     address?: Address
// }

// let user2: User =  {
//     name: "adsa",
//     age: 43
// }

// let user: User = {
//     name: "aadit",
//     age: 21,
//     address: {
//         city: "thane",
//         pincode: 898934
//     }
// }

// function isLegal(user: User): boolean {
//     return user.age > 18;
// }

// console.log(isLegal(user))  

interface Person {
    name: string,
    age: number
    greet: () => string
}

let people: Person = {
    name: "adsd",
    age: 23,
    greet: () => {
        return "hi"
    }
}
const ans = people.greet()
console.log(ans )