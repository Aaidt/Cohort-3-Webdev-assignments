const { Router } = require("express");
const { mongoose } = require("mongoose");
const { AdminModel } = require("../db/db");

const { z } = require("zod");

const adminRouter = Router();

adminRouter.post("/signup", async function(req, res) {
    // input validation using zod
    const Admin = z.object({
        username: z.string().min(11).max(70).email(),
        password: z.string().min(8, { message: "Must be 8 characters or longer." }).max(70, { message: "Must be max 70 characters" }),
        firstName: z.string().min(3, { message: "Must be 3 characters or longer." }).max(70, { message: "Must be max 70 characters" }),
        lastName: z.string().min(3, { message: "Must be 3 characters or longer." }).max(70, { message: "Must be max 70 characters" }),
    });

    const data = Admin.safeParse(req.body);

    if(!data.success){
        res.status(403).json({
            message: "Incorrect format.",
            error: data.error
        });
        return
    }
    
    const { username, password, firstName, lastName } = req.body;
    // hash the password


    await AdminModel.create({
        username,
        password,
        firstName,
        lastName
    })
})