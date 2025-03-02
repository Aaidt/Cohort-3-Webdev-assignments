const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

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

const ItemSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    availability: Boolean,
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AdminSchema"
    }
});

const CartSchema = new Schema({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserSchema"
    },
    purchasedItem: {
        title: String,
        description: String,
        price: Number,
        availability: Boolean  
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