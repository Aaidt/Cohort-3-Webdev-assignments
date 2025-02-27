// const express = require("express");
// const Router = express.Router();

const { Router } = require("express");
const userRouter = Router();
const { UserModel } = require("../db/db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config")
const { userMiddleware } = require("../middleware/user")

userRouter.post("/signup", async function(req, res){
    const { email, password, firstName, lastName } = req.body; // add zod validation
    // hash the password so the original is not saved in the db

    await UserModel.create({
        email,
        password,
        firstName,
        lastName
    });
    res.json({
        message: "signup endpoint."
    });
})

userRouter.post("/signin", async function(req, res){
    const { email, password } = req.body;
    const user = await UserModel.findOne({
        email,
        password
    });

    if(user){
        const token = jwt.sign({
            id: user._id    
        }, JWT_USER_PASSWORD);
        res.json({
            token
        });
    }else{
        res.json({
            message: "incorrect credentials"
        });
    }
    
})


userRouter.get("/purchases", function(req, res){
    res.json({
        message: "purchases endpoint."
    });
})


module.exports = {
    userRouter: userRouter 
}