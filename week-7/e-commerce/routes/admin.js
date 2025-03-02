const { Router } = require("express");
const { mongoose } = require("mongoose");
const { AdminModel, ItemModel } = require("../db/db");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const adminRouter = Router();
const { JWT_ADMIN_PASSWORD, JWT_USER_PASSWORD } = require("../config")
const { adminMiddleware } = require("../middlewares/admin");


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
    const saltRounds = 2;
    try{
        const hashedPassword = await bcrypt.hash(password, saltRounds);    
        await AdminModel.create({
            username,
            password: hashedPassword,
            firstName,
            lastName
        });
        res.json({
            message: "Signup successfull."
        })
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

    try{
        const response = await AdminModel.findOne({
            username: username
        });
    
        const matchedPassword = await bcrypt.compare(password, response.password);
        if(matchedPassword){
            const token = jwt.sign({
                id: response._id
            }, JWT_ADMIN_PASSWORD);
            res.json({
                message: "Signed-in successfully.",
                token: token
            });
        }else{
            res.json({
                message: "Password is incorrect."
            });
        }
    }catch(err){
        console.log(err);
    }

});

adminRouter.post("/items", adminMiddleware, async function(req, res){
    const adminId = req.userId;

    // input validation
    const itemInput = z.object({
        title: z.string().max(100),
        description: z.string().max(100),
        price: z.number().gte(999),
        availability: z.boolean()
    });

    const data = itemInput.safeParse(req.body);

    if(!data.success){
        res.status(403).json({
            message: "Invalid format.",
            error: data.error
        });
        return
    }

    const { title, description, price, availability } = req.body;

    try{
        const item = await ItemModel.create({
            title,
            description,
            price,
            availability,
            sellerId: adminId
        });
        res.json({
            message: "item added successfully",
            itemId: item._id
        })
    }catch(err){
        console.log(err);
    }
    
});

adminRouter.put("/updateItems", adminMiddleware, async function(req, res){
    const adminId = req.userId;

    const { title, description, price, availability, itemId } = req.body;

    try{
        const item = await ItemModel.findOne({
            _id: itemId,
            sellerId: adminId
        });
        if(!item){
            return res.status(404).json({
                message: "Item not found"
            });
        }

        const updateItem = await ItemModel.updateOne({
            _id: itemId,
            sellerId: adminId
        }, {
            title,
            description,
            price,
            availability
        });
        res.json({
            message: "Items updated successfully"
        });
    }catch(err){
        console.log(err);
    }

});

adminRouter.get("/viewItems", adminMiddleware, async function(req, res){
    const adminId = req.userId;
    const item = await ItemModel.find({
        sellerId: adminId
    });
    res.json({
        message: "Got all items successfully.",
        items: item
    });
});

module.exports = {
    adminRouter: adminRouter 
}