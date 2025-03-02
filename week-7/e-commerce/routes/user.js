const { Router } = require("express");
const userRouter = Router();
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const { mongoose } = require("mongoose");   
const { UserModel, CartModel, ItemModel } = require("../db/db");
const { userMiddleware } = require("../middlewares/user");


userRouter.post("/signup", async function(req, res) {
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
        await UserModel.create({
            username,
            password: hashedPassword,
            firstName,
            lastName
        });
        res.json({
            message: "Signed-up successfully"
        });
    }catch(e){
        console.log("The err is:" + e);
    }
});

userRouter.post("/signin", async function(req, res) {
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

    const response = await UserModel.findOne({
        username: username
    });

    const matchedPassword = await bcrypt.compare(password, response.password);

    if(matchedPassword){
        const token = jwt.sign({
            id: response._id
        }, JWT_USER_PASSWORD);
        res.json({
            message: "Signed-in successfully",
            token: token
        });
    }else{
        res.json({
            message: "Password is incorrect."
        });
    }
});

userRouter.get("/viewItems", async function(req, res) {
    const items = await ItemModel.find({});
    res.json({
        message: "Get all the items here!!!",
        items: items
    });
})

userRouter.post("/cart/:itemId", userMiddleware, async function(req, res) {
    const itemId = req.params.itemId;
    const userId = req.userId;

    try{
        const itemInfo = await ItemModel.findOne({
            _id: itemId
        });
    
        if(!itemInfo){
            return res.status(404).json({
                message: "Item not found"
            });
        }
    
        const cart = await CartModel.create({
            ownerId: userId,
            purchasedItem: {
                title: itemInfo.title,
                description: itemInfo.description,
                price: itemInfo.price,
                availability: itemInfo.availability
            }
        });
        res.json({
            message: "Cart updated!!!"
        });
    }catch(err){
        console.log(err);
    }
});

userRouter.get("/viewCart", userMiddleware, async function(req, res) {
    const userId = req.userId;
    const cartItems = await CartModel.find({
        ownerId: userId
    });
    res.json({
        message: "View your cart here!!!",
        cart: cartItems
    });
})


module.exports = {
    userRouter
}
