const { Router } = require("express");
const { mongoose } = require("mongoose");
const { AdminModel } = require("../db/db");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const adminRouter = Router();
const { JWT_ADMIN_SECRET } = require("../config")

adminRouter.post("/signup", async function(req, res) {
    // input validation using zod
    const input = z.object({
        username: z.string().min(11).max(70).email(),
        password: z.string().min(8, { message: "Must be 8 characters or longer." }).max(70, { message: "Must be max 70 characters" }),
        firstName: z.string().min(3, { message: "Must be 3 characters or longer." }).max(70, { message: "Must be max 70 characters" }),
        lastName: z.string().min(3, { message: "Must be 3 characters or longer." }).max(70, { message: "Must be max 70 characters" }),
    });

    const data = input.safeParse(req.body);

    if(!data.success){
        res.status(403).json({
            message: "Incorrect format.",
            error: data.error
        });
        return
    }

    const { username, password, firstName, lastName } = req.body;

    // hash the password and add to the db
    const saltRounds = 5;
    try{
        const hashedPassword = await bcrypt.hash(password, saltRounds);    
        await AdminModel.create({
            username,
            password: hashedPassword,
            firstName,
            lastName
        });
    }catch(e){
        console.log("The err is:" + e);
    }

});

adminRouter.post("/signin", async function(req, res) {
     // input validation using zod
     const input = z.object({
        username: z.string().min(11).max(70).email(),
        password: z.string().min(8, { message: "Must be 8 characters or longer." }).max(70, { message: "Must be max 70 characters" })
    });

    const data = input.safeParse(req.body);

    if(!data.success){
        res.status(403).json({
            message: "Incorrect format.",
            error: data.error
        });
        return
    }

    const { username, password } = req.body;

    const response = await AdminModel.findOne({
        username: username
    });

    const matchedPassword = await bcrypt.compare(password, response.password);

    if(matchedPassword){
        const token = jwt.sign({
            username
        }, JWT_ADMIN_SECRET);
        res.json({
            token: token
        });
    }else{
        res.json({
            message: "Password is incorrect."
        });
    }
});