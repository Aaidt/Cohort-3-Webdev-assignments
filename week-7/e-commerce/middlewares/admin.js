// authenticate if its really the admin before allowing it to use the routes
const { JWT_ADMIN_PASSWORD } = require("../config");
const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next){
    const token = req.headers.token;
    const decode = jwt.verify(token, JWT_ADMIN_PASSWORD);
    if(decode){
        req.userId = decode._id;
        next();
    }else{
        res.status(403).json({
            message: "Incorrect token"
        });
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}
