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
    const { link, type } = req.body;
    await ContentModel.create({
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
        _id: contentId,
        userId: req.userId
    })
    res.json({
        message: 'content deleted sucessfully.'
    })
})


app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    const userId = req.userId
    if (share) {
        const hash = random(10)
        const existingLink = await LinkModel.findOne({
            userId: userId
        })
        if(existingLink){
            res.json({
                hash: existingLink.hash
            })
            return
        }
        await LinkModel.create({
            userId: userId,
            hash
        })
        res.json({
            hash
        })
    } else {
        await LinkModel.deleteOne({
            userId: userId
        })
        res.json({
            message: "removed link."
        })
    }

})

app.get("/api/v1/brain/:sharelink", userMiddleware, async (req, res) => {
    const hash = req.params.sharelink;
    if(!hash){
        res.json({
            message: "link is requried."
        })
        return 
    }

    const link = await LinkModel.findOne({
        hash
    });

    if (!link) {
        res.status(411).json({
            message: "Incorrect input."
        })
        return;
    }

    const content = await ContentModel.find({
        userId: link.userId
    })

    const user = await UserModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found."
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })
})


app.listen(PORT, () => {
    console.log("Listening on port 3000.")
})
