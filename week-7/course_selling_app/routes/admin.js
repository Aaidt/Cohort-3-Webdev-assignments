const { Router } = require("express");
const adminRouter = Router();
const { AdminModel } = require("../db/db");
const { JWT_ADMIN_PASSWORD } = require("../config")
const jwt = require("jsonwebtoken");
const { adminMiddleware } = require("../middlewares/admin")

adminRouter.post("/signup", async function(req, res){
    const { email, password, firstName, lastName } = req.body; // add zod validation
    // hash the password so the original is not saved in the db
    await AdminModel.create({
        email,
        password,
        firstName,
        lastName
    });
    res.json({
        message: "signup endpoint."
    });
})

adminRouter.post("/signin", async function(req, res){
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({    
        email,
        password
    });

    if(admin){
        const token = jwt.sign({
            id: admin._id    
        }, JWT_ADMIN_PASSWORD);
        res.json({
            token
        });
    }else{
        res.json({
            message: "incorrect credentials"
        });
    }
})

adminRouter.get("/courses/bulk", adminMiddleware, async function(req, res){
    const adminId = req.userId;

    const courses = await CreaterModel.find({
        creatorId: adminId
    });
    res.json({
        message: "get all courses.",
        courses
    });
})

adminRouter.post("/courses", adminMiddleware, async function(req, res){
    const adminId = req.userId;
    const { title, description, price, imageURL, creatorId } = req.body;

    // create web3 saas vid => to learn abt how admin can directly post their images on our website instead of giving the URL 
    const course = await CourseModel.create({
        title,
        description,
        price,
        imageURL,
        creatorId: adminId
    });
    res.json({
        message: "courses created successfully.",
        courseId: course._id
    });
})

adminRouter.put("/courses", adminMiddleware, async function(req, res){
    const adminId = req.userId;
    const { title, description, price, imageURL, courseId } = req.body;

    // create web3 saas vid => to learn abt how admin can directly post their images on our website instead of giving the URL 
    const course = await CourseModel.update({
        _id: courseId,
        creatorId: adminId
    }, {
        title,
        description,
        price,
        imageURL,
    });
    res.json({
        message: "courses updated successfully.",
        courseId: course._id
    });
    res.json({
        message: "change courses endpoint."
    });
})

module.exports = {
    adminRouter: adminRouter
}