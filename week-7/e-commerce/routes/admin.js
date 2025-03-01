const { Router } = require("express");
const { mongoose } = require("mongoose");
const { AdminModel } = require("../db/db");

const adminRouter = Router();

adminRouter.post("/signup", async function(req, res) {
    const { username, password, firstName, lastName } = req.body;
    // input validation using zod


    // hash the password


    await AdminModel.create({
        username,
        password,
        firstName,
        lastName
    })
})