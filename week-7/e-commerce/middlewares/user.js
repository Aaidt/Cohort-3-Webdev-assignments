// authenticate if its really the user before allowing it to use the routes

const { JWT_USER_PASSWORD } = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(){
    const token = req.headers.token;
    const decode = jwt.verify(token, JWT_USER_PASSWORD);
    if(decode){
        req.userId = decode.id;
        next();
    }else{
        res.status(403).json({
            message: "Incorrect token"
        });
    }
}
module.exports = {
    userMiddleware
}
