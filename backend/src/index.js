import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { UserRoutes, WordRoutes, CategoryRoutes } from "../routes/index.js";

var app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
var mongoDB = "mongodb://localhost:27017/learn-eng";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

UserRoutes(app);
WordRoutes(app);
CategoryRoutes(app);

app.listen(3001, function () {
    console.log("Example app listening on port 3001!");
});
