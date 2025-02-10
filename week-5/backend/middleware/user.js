// verify and pass the jwt token in the req.userId for the next func
const jwt = require("jsonwebtoken");  
const SECRET = process.env.SECRET || "secret1234";


async function auth(req, res, next){
    const token = req.headers.token;

    if(!token){
        res.status(401).json({
            message: "No token provided."
        });
    }
    
    try{
        jwt.verify(token, SECRET, (err, users) => {
            if(err){
                res.status(403).json({ message: "Invalid token." });
            }
            req.userId = users.userId;
            next();
        });
    }catch(err){
        console.log(err);
    }
}