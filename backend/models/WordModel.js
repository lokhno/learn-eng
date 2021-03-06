import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WordSchema = new Schema(
    {
        engWord: { type: String, required: true },
        rusWord: { type: String, required: true },
        create_on: Date,
        edit_on: Date,
        category: { type: Schema.Types.ObjectId, ref: 'Category' },
        author: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    { collection: "word" }
);

const WordModel = mongoose.model("Word", WordSchema);

export default WordModel;
