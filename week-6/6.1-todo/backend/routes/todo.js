let todos = []; // in memory space
let ID = 0;

export async function getAllTodo (req, res, next){
    res.send({
        todo: todos
    });
}

export async function createTodo (req, res, next){
    const todo = req.body.todo;
    ID += 1; // There's a lot of issues with this logic because once a todo is deleted that id will basically 
    // point to a null todo, instead of the id just being assigned to the next todo. 
    todos.push({
        id: ID,
        todo: todo
    });
    res.send({
        message: "Successfully added a new todo."
    });
}

export async function updateTodo (req, res, next){
    const id = req.params.id;
    const updatedTodo = req.body.updatedTodo; // will recieve this through the FE

    let foundTodo = todos.find(todo => todo.id === id);

    if(foundTodo){
        foundTodo.todo = updatedTodo;
    }else{
        res.status(403).send({
            message: "Invalid ID."
        });
    }
}

export async function deleteTodoById (req, res, next){
    try{
        const id = req.params.id;
        todos = todos.filter(todo => todo.id !== id);
        res.send({
            message: "todo successfully deleted."
        });
    }catch(error){
        console.log(error);
    }

}
