const express = require('express');
const app = express();
app.use(express.json());

const jwt = require('jsonwebtoken');
const JWT_SECRET =  "aaditdoesnotknowwhokiarais";
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

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for(let i = 0; i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i];
        }
    }
    // const foundUser = users.find((user) => user.username == username && user.password == password);
    if(foundUser){
        // const token = generateRandomToken();
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

app.get("/me", function(req, res) {
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;
    
    let foundUsers = users.find(user => user.username == username);

    if(foundUsers){
        res.send({
            username: foundUsers.username,
            password: foundUsers.password
            
        });
    }else{
        res.status(403).send({
            message: "Invalid token."
    });
    }
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});