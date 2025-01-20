// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const app = express();
const port = 3000;

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

const users = [{
  name: "John"
}]

app.get('/user', function(req, res) {
  res.status(200).json({ users });
});

app.use(express.json());

app.post('/user', function(req, res) {
  const nameOfUser = req.body.nameOfUser
  users.push({
    name: nameOfUser
  })
  res.status(200).json({ msg: 'created dummy user' });
});



app.listen(port, function(err) {
  if(err){
    console.log(err);
  }
  console.log("Server is listening on port: ", port)
});
module.exports = app;