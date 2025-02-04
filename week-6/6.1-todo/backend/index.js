import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';


import { getAllTodo, createTodo, updateTodo, deleteTodoById } from './routes/todo.js';
const app = express();
const PORT = 3001;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// for converting the css from /html to actual css 
// app.use(express.static(path.join(process.cwd(), 'public')));


// app.get('/', function(req, res){
//   res.sendFile(__dirname + "/frontend/public/index.html");
// })

// Get all todos
app.get('/todos', getAllTodo);

// Add a new todo
app.post('/todos', createTodo);

// Update a todo
app.put('/todos/:id', updateTodo);

// Delete a todo
app.delete('/todos/:id', deleteTodoById);

// Search todos
// app.get('/todos/search', searchTodo); // search route

app.listen(PORT, (err) => {
  if(err){
    console.log(err);
  }else{
    console.log(`Server is running on http://localhost:${PORT}`);
  }
});