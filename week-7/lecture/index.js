const express = require("express");
const app = express();
const { UserModel, TodoModel } = require("./db");   

const jwt = require("jsonwebtoken");
const JWT_SECRET = "heytherewassup@1231233"; 

const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://aadit:1pUrfhF2ocP7CjC8@cluster0.66cyf.mongodb.net/todo-app-database");

const bcrypt = require("bcrypt");

app.use(express.json());

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });

    res.json({
        message: "You have successfully signed up."
    });
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });

    if(!response){
        res.status(403).json({
            message: "User does not exist in the database."
        });
    }

    const matchPassword = await bcrypt.compare(password, response.password);

    // console.log(response);

    if(matchPassword){
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        });
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        });
    }

});

function auth(req, res, next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData){
        req.userId = decodedData.id;
        next();
    }else{
        res.status(403).json({
            message: "invalid credentials"
        });
    }
}

app.use(auth);

app.post("/todo", async function(req, res) {
    const userId = req.userId;
    const title  = req.body.title;
    const done = req.body.done;

    const todo = await TodoModel.create({
        userId,
        title,
        done        
    });

    res.json({
        message: "Todo created successfully."
    });
});


app.get("/todos", async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    });
});

app.listen(3000);