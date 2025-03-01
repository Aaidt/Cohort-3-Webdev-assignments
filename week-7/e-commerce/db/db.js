const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const AdminSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const ItemScheama = new Schema({
    title: String,
    description: String,
    price: Number,
    availability: Boolean
});

const CartSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    availability: Boolean,
    purchasedItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const UserModel = mongoose.model("users", UserSchema);
const AdminModel = mongoose.model("admin", AdminSchema);
const ItemModel = mongoose.model("item", ItemSchema);
const CartModel = mongoose.model("cart", CartSchema);


module.exports = {
    UserModel,
    AdminModel,
    ItemModel,
    CartModel
}