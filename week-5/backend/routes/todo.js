//  write all the todo related routes here
// - GET("/"), POST("/todos"), PUT("/todos"), DELETE("/todos")

const express = require("express");
const router = express.Router();
const { UserModel, TodoModel } = require("./routes");

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



module.exports  = router;
