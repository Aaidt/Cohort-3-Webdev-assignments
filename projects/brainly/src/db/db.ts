import mongoose, { model, Schema } from "mongoose";
mongoose.connect("mongodb://localhost:27017/brainly");

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});

export const UserModel = model("users", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ types: mongoose.Types.ObjectId}],
    type: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'users', required: true}
})


const LinkSchema = new Schema({
    hash: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'users', required: true}
})

export const ContentModel = model("content", ContentSchema);
export const LinkModel = model("links", LinkSchema);
