// The backend will be deployed from here. 

const express = require("express");
const app = express();
const { auth } = require("./middleware/user"); 
const port = 3000;

app.use(express.json());
app.use(auth);





app.listen(port, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Server is listening on port ${port}`);
    }
})