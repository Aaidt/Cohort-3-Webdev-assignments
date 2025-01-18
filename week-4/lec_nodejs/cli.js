const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.command('count_a')
  .description('Count the number of a appears in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let count_a = 0;
        for(let i=0; i< data.length; i++){
            if(data[i] === "a"){
                count_a++;
            }
        }
        console.log(count_a);
      }
    });
  });

  program.command('add')
  .description('add todos in todo.json')

  .argument('<task>', 'task to add')
  .action((todo) => {
    let task = process.argv[3];
    fs.writeFile("todo.json", task, (err) => {
      if(err){
        console.log(err);
      }
      console.log("The file has been successfully updated!!!!");
    })
  })

  program.command('delete')
  .description('delete todos from todo.json')

  .argument('<task>', 'task to delete')
  .action((todo) => {
    fs.writeFile("todo.json", " ", (err) => {
      if(err){
        console.log(err);
      }
      console.log("The file has been successfully updated!!!!");
    })
  })


program.parse();


