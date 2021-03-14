import express from "express";
import mongoose from "mongoose";

import { UserRoutes, WordRoutes, CategoryRoutes } from "../routes/index.js";
import dotenv from "dotenv";
import path from "path";
const __dirname = path.resolve();

if (!process?.env?.LEARNENGADMIN_PASSWORD) {
    dotenv.config();
}

var app = express();
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, token"
    );
    next();
});

var mongoDB = `mongodb+srv://learnEngAdmin:${process.env.LEARNENGADMIN_PASSWORD}@learn-eng.t9qji.mongodb.net/learn-eng?retryWrites=true&w=majority`;
console.log("mongoDB connection string: " + mongoDB);
mongoose
    .connect(mongoDB, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB connected");
        console.log("__dirname ", __dirname);
    })
    .catch((err) => {
        console.log("ОШИБКА", err);
    });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

UserRoutes(app);
WordRoutes(app);
CategoryRoutes(app);

app.use(express.static("client"));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
