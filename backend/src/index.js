import express from "express";
import mongoose from "mongoose";

import { UserRoutes, WordRoutes, CategoryRoutes } from "../routes/index.js";

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
var mongoDB = "mongodb://localhost:27017/learn-eng";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

UserRoutes(app);
WordRoutes(app);
CategoryRoutes(app);


if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "../../frontend/build")));
    // Handle React routing, return all requests to React app
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
    });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
