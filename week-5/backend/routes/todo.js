//  write all the todo related routes here
// - GET("/"), POST("/todos"), PUT("/todos"), DELETE("/todos")

const express = require("express");
const router = express.Router();
const { UserModel, TodoModel } = require("./routes");

router.post("/", async (req, res) => {
    // add todos
    const todos = req.body.todos;
    const status = req.body.status;
    
    if(!todos){
        return res.status(403).json({
            message: "No todos sent."
        });
    }

    try{
        const newTodo = await TodoModel.create({
            title: todos,
            status: status,
            userId: req.userId
        });

        res.status(200).json({
            message: "Todo created.",
            todo: newTodo
        });
    }catch(err){
        res.status(500).json({
            message: "Error creating todo.",
            error: err.message
        });
    }
});

router.get("/", async function(req, res){
    const userId = req.userId;

    try{
        const todos = await TodoModel.findOne({
            userId
        });
        res.json({
            todos: todos
        });
    }catch(err){
        res.status(500).json({
            msg: "error fetching the todos"
        });
    }

});

router.post("/:id", async (req, res) => {
        // update todos
})

module.exports  = router;
