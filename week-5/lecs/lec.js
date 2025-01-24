// const response = await axios.get("https://smthsmth");

/* Instead of: const response = await fetch("http://smthsmth", {
method: GET })
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


const express = require("express");

const app = express();

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        answer: a + b 
    })
});

app.get("/multiply", function(req, res) {
    
});

app.get("/divide", function(req, res) {
    

});

app.get("/subtract", function(req, res) {

});

app.listen(3000);