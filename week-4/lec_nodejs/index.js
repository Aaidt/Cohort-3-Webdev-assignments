const express = require("express");

const app = express();

function canRideMiddleware(req, res, next){
    const age = req.query.age;
    if(age >= 18){
        next();
    }else{
        res.status(411).json({
            msg: "sorry but ur not of age to ride this."
        });
    }
}

app.use(canRideMiddleware);

app.get("/ride", function (req, res) {
    res.json({
        msg: "you have riden the ride."    
})
})

app.listen(3000);


