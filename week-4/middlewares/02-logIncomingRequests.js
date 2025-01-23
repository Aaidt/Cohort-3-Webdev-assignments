//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
    const currentDateTime = new Date().toISOString(); 
    const method = req.method;
    const url = req.originalUrl;

    console.log(`${method} ${url} - ${currentDateTime}`);

    next(); 
}
app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

module.exports = app;
