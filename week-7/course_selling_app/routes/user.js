// const express = require("express");
// const Router = express.Router();

const { Router } = require("express");
const userRouter = Router();
const UserModel = require("../db");

userRouter.post("/signup", async function(req, res){
    const { email, username, firstName, lastName } = req.body; // add zod validation
    // hash the password so the original is not saved in the db

    try{
        await UserModel.create({
            email,
            username,
            firstName,
            lastName
        });
    }catch(e){
        console.log(e);
    }
    
    res.json({
        message: "signup endpoint."
    });
})

userRouter.post("/signin", function(req, res){
    res.json({
        message: "signin endpoint."
    });
})


userRouter.get("/purchases", function(req, res){
    res.json({
        message: "purchases endpoint."
    });
})


module.exports = {
    userRouter: userRouter 
}