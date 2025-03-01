// const express = require("express");
// const Router = express.Router();
const { Router } = require("express");
const userRouter = Router();
const { UserModel, PurchaseModel } = require("../db/db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config")
const { userMiddleware } = require("../middlewares/user")

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


userRouter.get("/purchases", async function(req, res){
    const userId = req.userId;
    const purchases = await PurchaseModel.find({
        userId
    });

    const coursesData = await CourseModel.find({
        _id: { $in: puchases.map(x => x.courseId)}
    });
    
    res.json({  
        purchases
    });
})


module.exports = {
    userRouter: userRouter 
}