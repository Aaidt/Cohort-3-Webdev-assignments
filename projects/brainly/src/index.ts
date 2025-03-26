import express from "express";
const app = express();
import cors from "cors";
import { UserModel, ContentModel, LinkModel } from "./db/db"
import jwt from "jsonwebtoken";
import { JWT_PASSWORD, PORT } from "./config"
import { userMiddleware } from "./middlewares/userMiddleware"
import { random } from "./utils"

app.use(express.json())
app.use(cors())

app.post("/api/v1/brain/signup", async (req, res) => {
    // zod validation, password hashing 
    const { username, password } = req.body;
    try {
        await UserModel.create({
            username: username,
            password: password
        });

        res.status(200).json({
            message: "You have successfully signed up."
        });
    } catch (e) {
        console.log(e);
    }
})

app.post("/api/v1/brain/signin", async (req, res) => {
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
    } else {
        res.status(403).json({
            message: "Incorrect credentials."
        })
    }
})


app.post("/api/v1/brain/content", userMiddleware, async (req, res) => {
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


app.get("/api/v1/brain/content", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username");

    res.json({
        content
    })
})


app.delete("/api/v1/brain/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    await ContentModel.deleteMany({
        contentId,
        userId: req.userId
    })
    res.json({
        message: 'content deleted sucessfully.'
    })
})


app.post("/api/v1/brain/share", async (req, res) => {
    const { share } = req.body;
    if(share){
        await LinkModel.create({
            userId: req.userId,
            hash: random(10)
        })
    }else{
        await LinkModel.deleteOne({
            userId: req.userId
        })
    }

    res.json({
        message: "updated shareable link."
    })

})


app.listen(PORT, () => {
    console.log("Listening on port 3000.")
})
