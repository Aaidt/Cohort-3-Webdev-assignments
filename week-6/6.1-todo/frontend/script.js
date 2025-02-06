const API_URL = 'http://localhost:3001/todos';


// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchTodos();
});

const todoList = document.getElementById("todo-list");

// Fetch todos from backend
async function fetchTodos() {
    try{
        const response = await axios.get(API_URL);
        const fetchedTask = await response.data.todos;
        console.log(fetchedTask);

        todoList.innerHTML = "";
        fetchedTask.forEach(todo => {
            let todoItem = document.createElement("p");
            todoItem.textContent = todo.task;
            todoList.appendChild(todoItem);
        });
        document.getElementById("container").appendChild(todoList);
        
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
    addTodoToDOM();
});

// Toggle todo completion
function toggleTodo(id, completed) {
}

// Delete a todo
function deleteTodo(id) {
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "deleteTodo");
    todoList.appendChild(delete_button);
}

deleteButton.addEventListener("click", () => {
    deleteTodo()
})