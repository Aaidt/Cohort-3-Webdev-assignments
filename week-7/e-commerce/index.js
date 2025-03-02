require("dotenv").config();
const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const PORT = process.env.PORT || 4000;

const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
// const { itemRouter } = require("./routes/item");


app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
// app.use("/item", itemRouter);

async function main(){
    await mongoose.connect(process.env.MONGODB_URL);
    app.listen(PORT, () => {
        console.log(`The server is listening on port: ${PORT}`);
    });
}

main();