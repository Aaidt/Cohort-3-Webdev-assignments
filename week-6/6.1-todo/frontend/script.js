const API_URL = 'http://localhost:3001/todos';


// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // fetch todos
  fetchTodos();
});

const todoList = document.getElementById("todo-list");

// Fetch todos from backend
async function fetchTodos() {

    try{
        const response = await axios.get(API_URL);
        const task = await response.todos;
        console.log(task);

        todoList.innerHTML = "";
        const todoContent = task.map((todo) => todo.todo);
        const todoItem = document.createElement("li");
        todoItem.textContent = todoContent;
        todoList.appendChild(todoItem);
    }catch(error){
        console.log(error);
    }
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