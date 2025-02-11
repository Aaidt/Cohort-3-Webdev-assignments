// write all the user routes here
// POST("/signup"), POST("/signin")
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilovedonutsbuticannoteatthemorillgetfat"; 
const { z } = requie("zod"); 
const { UserModel, TodoModel } = require("./db");

router.post("/signup", async function(req, res){
    const requiredBody = z.Object({
        email: z.String().min(10).max(100).email(),
        password: z.String().min(10).max(100),
        name: z.String().min(10).max(100)
    });

    const parsedData = requiredBody.safeParse(req.body);
    if(!parsedData.success){
        res.status(401).json({
            message: "Invalid input credentials.",
            error: parsedData.error
        });
        return;
    }
    
    const saltRounds = 5;
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try{
        const hashedPassword = await bcrypt.hash(password, saltRounds, function(err, hash){
            if(err){
                console.log(err);
            }
        });
    
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name        
        });
    }catch(e){
        console.log(e);
    }
    res.status(403).json({
        message: "You have successfully signed up!!!"
    });
});

router.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });

    if(!response){
        res.status(403).json({
            message: "User does not exist in the database."
        });
    }

    const matchedPassword = bcrypt.compare(password, response.password);

    if(matchedPassword){
        const token = jwt.sign({
            id: response._id.toString()            
        }, JWT_SECRET);
        res.json({
            token: token
        });
    }else{
        res.status(403).json({
            message: "The password is invalid."
        });
    }

});


module.exports = router;