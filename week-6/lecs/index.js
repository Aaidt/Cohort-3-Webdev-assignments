const express = require('express');
const app = express();
app.use(express.json());

const jwt = require('jsonwebtoken');
const JWT_SECRET =  "aadidoesnotknowwhokiarais";
const users = [];

// function generateRandomToken(){
//     const options = [
//         'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
//         'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//         'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
//         'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//         '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
//       ];

//     let token = ""; 
//     for(let i = 0; i < 32; i++){
//         token += options[Math.floor(Math.random() * options.length)];
//     } 
//     return token;
// }

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/publicF/index.html");
})

function logger(req, res, next){
    console.log(`${req.method} request just came in.`);
    next();
}

app.use(logger);

app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You have successfully signed up."
    });
    console.log(users);
});

app.post("/signin",  function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // let foundUser = null;
    // for(let i = 0; i < users.length; i++){
    //     if(users[i].username == username && users[i].password == password){
    //         foundUser = users[i];
    //     }
    // }
    let foundUser = users.find(user => user.username == username && user.password == password);
    if(foundUser){  
        // const token = generateRandomToken();
        console.log(`Signing the token with the username: ${username}`);
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        // foundUser.token = token;  
        // no need to save jwt in db as it is a stateless token ie. it stores the username in the tokens encoding itself, so it doesnt need to be kept in the db with the respective user.
        res.send({
            token: token
        });
        // console.log(foundUser);
    }else{
        res.status(403).send({
        message: "Invalid username or password"
    });
    }
    console.log(users);
});

function auth(req, res, next){  
    const token = req.headers.token;
    if(token){
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err){
                res.status(403).send({
                    message: "Unauthorized"
                });
            }else{
                req.username = decoded.username;
                next();
            }
        });
    }else{
        res.status(403).send({
            message: "You're not logged in."
        });
    }
}

app.use(auth);

app.get("/me", function(req, res) {
    const thisUser = req.username;
    // console.log(`${req.username} is the username`);
    let foundUser = users.find((user) => user.username === thisUser);

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
            
        });
    }else{
        res.status(404).send({
            message: "There's no user with those credentials."
        });
    }
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});