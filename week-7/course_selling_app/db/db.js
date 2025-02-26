const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;


const User = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});


const Course = new Schema({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    creatorId: ObjectId
});

const Admin = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
});

const Purchase = new Schema({
    courseId: ObjectId,
    userId: ObjectId
});


const UserModel = mongoose.model("users", User);
const CourseModel = mongoose.model("course", Course);
const AdminModel = mongoose.model("Admin", Admin);
const PurchaseModel = mongoose.model("Purchase", Purchase);


module.exports = {
    UserModel,
    CourseModel,
    AdminModel,
    PurchaseModel  
}
