const { Router } = require("express");
const adminRouter = Router();
const { AdminModel } = require("../db/db");
const JWT_ADMIN_PASSWORD = "adasdsadsadsdsadsdas";
const jwt = require("jsonwebtoken");


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

adminRouter.get("/courses/bulk", function(req, res){
    res.json({
        message: "get courses endpoint."
    });
})

adminRouter.post("/courses", function(req, res){
    res.json({
        message: "create courses endpoint."
    });
})

adminRouter.put("/courses/:id", function(req, res){
    res.json({
        message: "change courses endpoint."
    });
})

module.exports = {
    adminRouter: adminRouter
}