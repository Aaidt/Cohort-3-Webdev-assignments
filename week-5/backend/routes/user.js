// write all the user routes here
// POST("/signup"), POST("/signin")
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async function(req, res){
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

});


module.exports = router;