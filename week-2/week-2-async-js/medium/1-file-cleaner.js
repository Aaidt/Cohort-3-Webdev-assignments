// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

let fs= require('fs');

const contents = (filepath) => {
    fs.readFile(filepath, "utf-8",(err, data) => {
        if(err){
            console.log("There was an error in reading the file.", err);
            return;
        }    
        console.log("Content of the file before modification:");
        console.log(data);
    
        const cleanedContent = data.replace(/\s+/g, ' ').trim();
    
        fs.writeFile(filepath, cleanedContent, (err) => {
            if(err){
                console.log("There was an error in writing to the file.", err);
                return;
            }
            console.log("Content of the file after modification:");
            console.log(cleanedContent);
            console.log("File cleaned successfully!!!");
            
        });
    });
    
} 

const filepath = "b.txt";
contents(filepath);