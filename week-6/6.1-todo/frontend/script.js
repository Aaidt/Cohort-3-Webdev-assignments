const API_URL = 'http://localhost:3001/todos';


// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // fetch todos
  fetchTodos();
});

// Fetch todos from backend
async function fetchTodos() {
    const response = await axios.get(API_URL);
    const task = await response.data;

    let todoToAppend = task.forEach(task => task.todo);
    const todos = document.getElementById("todo-list");
    todos.textContent = todoToAppend;
    
    // console.log(task);
}

// Add a new todo to the DOM
async function addTodoToDOM() {
    
    const taskValue = document.getElementById("todo-input").value;
    await axios.post(API_URL, {
        todo: taskValue
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