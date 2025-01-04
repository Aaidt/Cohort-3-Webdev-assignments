// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

let data = "hwy there, im from a diff file.";

fs.writeFileSync("a.txt", data);
console.log("the file has been successfully written into.The contents is:");
console.log(fs.readFileSync("a.txt", "utf-8"));

