// const response = await axios.get("https://smthsmth");

/* Instead of: const response = await fetch("http://smthsmth", {
method: GET })
USE: 
const data = await response.json();
OR
JSON.stringify(data);
*/


// const express = require("express");
// const app = express();

// app.get('/sum/:a/:b', function(req, res) {
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b)
//     res.json({
//         answer: a + b
//     })
// })

// app.listen(3000);


// const express = require("express");

// const app = express();

// app.get("/sum", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.get("/multiply", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a * b
//     })
// });

// app.get("/divide", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a / b
//     })

// });

// app.get("/subtract", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a - b
//     })
// });

// app.listen(3000);


// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

// const express = require("express");

// const app = express()

// function logIncomingRequests(req, res, next){
//     console.log(`The http method used here is: ${req.method}, url is: ${req.url} and time is: ${new Date()}`)
//     next();
// }

// app.use(logIncomingRequests)

// app.get('/', function(req, res) {
//     res.json({
//         msg: "Incoming reqests!!!"
//     })
// })

// app.listen(3000);


const express = require("express");
// const cors = require("cors");
const app = express();

// app.use(cors());

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public_html/lec.html");    
});


app.get('/sum', function(req, res) {
    console.log(req.name);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        answer: a + b 
    });
});

app.listen(3000, () => {
    console.log("Server is listening on port number 3000");
});