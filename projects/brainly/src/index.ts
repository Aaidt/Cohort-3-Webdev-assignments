import express from "express";
const app = express();
import { UserModel } from "./db/db"
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config"

app.post("/api/v1/signup", async (req, res) => {
    // zod validation, password hashing 
    const { username, password } = req.body;
    try{
        await UserModel.create({
            username: username,
            password: password
        });
    
        res.status(200).json({
            message: "You have successfully signed up."
        });
    }catch(e){
        console.log(e);
    }
})

app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await UserModel.findOne({
        username,
        password
    });

    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)
        res.json({
            token
        })
    }else{
        res.status(403).json({
            message: "Incorrect credentials."
        })
    }
})

app.post("/api/v1/signup", async (req, res) => {
})


app.post("/api/v1/signup", async (req, res) => {
})

app.post("/api/v1/signup", async (req, res) => {
})
