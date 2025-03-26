import express from "express";
const app = express();
import { UserModel, ContentModel, LinkModel } from "./db/db"
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config"
import { userMiddleware } from "./middlewares/userMiddleware"

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

app.use(userMiddleware);

app.post("/api/v1/content", async (req, res) => {
    const { title, link, type } = req.body;   
    await ContentModel.create({
        title,
        link,
        type,
        tags: [],
        userId: req.userId
    });

    res.json({
        message: "content added."
    })
})


app.get("/api/v1/content", async (req, res) => {
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username");

    res.json 
})


app.post("/api/v1/links", async (req, res) => {
})
