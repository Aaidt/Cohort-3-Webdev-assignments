// define the db schema here
const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;

const User = new Schema({
    email: {type: String, unique: true},
    password: String,
    name: String
});


const Todos = new Schema({
    UserId: ObjectId,
    title: String,
    status: Boolean
});


const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todos);

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel 
};

