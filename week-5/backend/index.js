// The backend will be deployed from here. 
const cors = require("cors");
const express = require("express");
const app = express();
const { auth } = require("./middleware/user"); 
const port = 3000;

const TodoRouter = require("./routes/todo");
const UserRouter = require("./routes/user");


app.use(cors());
app.use(express.json());
app.use(auth);


app.use("/todo", TodoRouter)
app.use("/user", UserRouter)


app.listen(port, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Server is listening on port ${port}`);
    }
})