// let user = {
//     name: "aadit",
//     age: 2,
//     gender: 'male'
// }
// function canVote(age){
//     let result = (age >= 18);
//     return result;
// }

// let ans = canVote(user.age);
// if (ans)
//     console.log("The user: " + user.name + " is eligible to vote.");
// else
//     console.log("The user: " + user.name + " is not eligible to vote.");




//function that takes array of objects and returns 
//array of objects with age > 18 and male
// let users = [{
//     name: "aadit",
//     age: 20,
//     gender: "male" 
// },
// {
//     name: "d",
//     age: 15,
//     gender: 'female'
// },
// ];
// function filterAdults(users){
//     let arr = [];
//     for (let user of users){
//         if (user.age>=18){
//             arr.push(user);
//         }
//     }
//     return arr;
// }
// let ans = filterAdults(users);
// console.log(ans);

// function sum(num){
//     let res = 0;
//     for(let i = 1; i <= num; i++){
//         res += i;
//     }
//     return res;
// }
// let ans = sum(100);
// console.log(ans);

// const fs = require("fs");

// function res(err, data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// }


// fs.readFile("a.txt", "utf-8", res);
// // fs.readFile("b.txt", "utf-8", res);

// console.log("Done!!!");



/*create promisified version of 
setTimeout
fetch
fs.readFile
*/


// class square{
//     constructor(sides, color){
//         this.sides = sides;
//         this.color = color;
//     }
    

//     area(){
//         const area = this.sides * this.sides;
//         console.log(area);
//     }

//     paint(){
//         console.log(`The square is painted with the color ${this.color}`)
//     }

// }

// const sqr = new square(25, 'blue');
// const area = sqr.area();
// const color = sqr.paint();



// const date = new Date();
// console.log(date.getDate());

// const map = new Map();
// map.set('name', 'aadit');
// map.set('age', 90);
// console.log(map.get('age'));


// function age(){
//     console.log(90);
// }

// setTimeout(age, 5000);


// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
// function callback(){
//     console.log("5secs have passed");
// }

// setTimeoutPromisified(5000).then(callback);



// function waitFor3sec(resolve){
//     setTimeout(resolve, 3000);
// }

// function main(){
//     console.log("main is called");
// }

// function setTimeoutPromisified(){
//     return new Promise(waitFor3sec);
// }

// setTimeoutPromisified().then(main);
// function random(resolve){
//     resolve();
// }
// let p = new Promise(random);
// function callback(){
//     console.log('the callback is called...');
// }
// p.then(callback)
// console.log(p);





/*
Write a function that
Reads the contents of a file
Trims the extra space from the left and right
Writes it back to the file
*/
// const fs = require("fs");
// function cleanFile(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, "utf-8", (err, contents) => {
//             if (err) {
//                 console.log("Error reading file: " + err);
//                 reject(err); // Reject the promise on error
//                 return;
//             }

//             console.log("Contents of the file before modification.");
//             console.log(contents);

//             const cleanedContents = contents.replace(/\s+/g, " ").trim();

//             console.log("Contents of the file after modification.");
//             console.log(cleanedContents);

//             fs.writeFile(path, cleanedContents, (err) => {
//                 if (err) {
//                     console.log("Error writing to the file: " + err);
//                     reject(err); // Reject the promise on error
//                     return;
//                 }
//                 console.log("Contents successfully written.");
//                 resolve(); // Resolve the promise on success
//             });
//         });
//     });
// }
// cleanFile("a.txt")
//     .then(() => {
//         console.log("The file has been cleaned.");
//     })
//     .catch((err) => {
//         console.error("An error occurred:", err);
//     });




// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve, duration);
//     });
// }

// async function solve(){
//     await setTimeoutPromisified(1000);
//     console.log('hi');
//     await setTimeoutPromisified(3000);
//     console.log('hello');
//     await setTimeoutPromisified(5000);
//     console.log("hey there!");

// }
// solve();



// function delayedFunc(){
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Done!!!"), 2000)
//     });
// }
// async function wait(){
//     const res = await delayedFunc();
//     console.log(res);
// }
// console.log('hey')
// wait();





