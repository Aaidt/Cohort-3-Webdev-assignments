// const express = require("express");
// const Router = express.Router();

const { Router } = require("express");
const courseRouter = Router();


courseRouter.post("/signup", function(req, res){
    res.json({
        message: "signup endpoint."
    });
})

courseRouter.post("/signin", function(req, res){
    res.json({
        message: "signin endpoint."
    });
})


courseRouter.get("/purchases", function(req, res){
    res.json({
        message: "purchases endpoint."
    });
})

courseRouter.get("/preview", function(req, res){
    res.json({
        message: "preview endpoint."
    });
})


module.exports = {
    courseRouter: courseRouter 
}