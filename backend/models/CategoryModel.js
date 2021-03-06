import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        title: { type: String, required: true },
        edit_on: Date,
        create_on: Date,
    },
    { collection: "category" }
);

const CategoryModel = mongoose.model("Category", CategorySchema);

export default CategoryModel;
