import { UserModel } from "../models/index.js";

class UserCtrl {
    create = (req, res) => {
        const data = {
            user_name: req.body.user_name,
            create_on: new Date(),
            email: req.body.email,
            password: req.body.password,
        };
        new UserModel(data)
            .save()
            .then((user) => {
                res.json(user);
            })
            .catch((message) => {
                res.status(500).json({ status: "error", message });
            });
    };
    read = (req, res) => {
        const id = req.params.id;
        UserModel.find({ _id: id }).exec(function (err, messages) {
            if (err) {
                return res.status(404).json({ message: `Message not found` });
            }
            return res.json(messages);
        });
    };
}

export default UserCtrl;
