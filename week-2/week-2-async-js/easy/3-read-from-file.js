// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

let fs = require("fs");

let contents = fs.readFile("4-write-to-file.md", "utf-8");
let i = 0;
while(i<100000000000000000){
    i++;
    // console.log(i);
}
console.log(contents);
