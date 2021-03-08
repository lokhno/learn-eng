import { UserModel } from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

class UserCtrl {
    create = async (req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const data = {
                user_name: req.body.user_name,
                create_on: new Date(),
                email: req.body.email,
                password: hashedPassword,
                passwordTest: req.body.password,
            };
            new UserModel(data)
                .save()
                .then((user) => {
                    res.json(user);
                })
                .catch((message) => {
                    res.status(500).json({ status: "error", message });
                });
        } catch (error) {
            res.status(500).json({ status: "error", error });
        }
    };
    read = (req, res) => {
        const id = req.params.id;
        UserModel.find({ _id: id }).exec(function (err, user) {
            if (err) {
                return res.status(404).json({ message: `User not found` });
            }
            return res.json(user);
        });
    };

    getMe = (req, res) => {
        const id = req.user;
        UserModel.find({ _id: id }).exec(function (err, user) {
            if (err) {
                return res.status(404).json({ message: `User not found` });
            }
            return res.json(user);
        });
    };

    login = (req, res) => {
        const email = req.body.email;
        UserModel.findOne({ email: email }).exec(async (err, user) => {
            if (err) {
                return res.status(404).json({ message: `User not found` });
            }
            if (user) {

                try {
                    const checkPassword = await bcrypt.compare(
                        req.body.password,
                        user.password
                    );
                    if (checkPassword) {
                        const accessToken = jwt.sign(
                            { _id: user.id },
                            process.env.ACCESS_TOKEN_SECRET,
                            { algorithm: "HS256" }
                        );
                        res.json({ message: "Success", accessToken, user });
                    } else {
                        res.send("Not allowd");
                    }
                } catch (error) {
                    res.status(500).json({ status: "error", error });
                }
            }
        });
    };
}

export default UserCtrl;
