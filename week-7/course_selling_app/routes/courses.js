// const express = require("express");
// const Router = express.Router();

const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/purchases", async function(req, res){
    const userId = req.userId;
    const courseId = req.body.courseId

    // should check if the user has actually paid for the course.
    await PurchaseModel.create({
        userId,
        courseId
    });

    res.json({
        message: "You have successfully bought the courses."
    });
})

courseRouter.get("/preview", async function(req, res){
    const courses = await CourseModel.find({});

    res.json({
        courses
    });
})


module.exports = {
    courseRouter: courseRouter 
}