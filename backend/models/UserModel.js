import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        user_name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        passwordTest: { type: String, required: true },
        create_on: Date,
    },
    { collection: "user" }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
