const API_URL = 'http://localhost:3001/todos';


// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // fetch todos
  fetchTodos();
});

// Fetch todos from backend
async function fetchTodos() {
    //  write here
    const response = await axios.get(API_URL);
    const task = JSON.stringify(response.data);

    const todos = document.getElementById("todo-list");
    todos.textContent = task;
    
    console.log(task);
}

// Add a new todo to the DOM
async function addTodoToDOM() {
    //  write here
    const todo = document.getElementById("todo-input").value;
    const todos = await axios.post(API_URL, {
        todos: todo
    });
}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', () => {
    //  write here
    addTodoToDOM();
});

// Toggle todo completion
function toggleTodo(id, completed) {
//    write here
}

// Delete a todo
function deleteTodo(id) {
    // write here  
}