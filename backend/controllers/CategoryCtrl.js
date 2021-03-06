import { CategoryModel } from "../models/index.js";

class CategoryCtrl {
    create = (req, res) => {
        const data = {
            title: req.body.title,
            create_on: new Date(),
            edit_on: new Date(),
        };
        new CategoryModel(data)
            .save()
            .then((category) => {
                res.json(category);
            })
            .catch((message) => {
                res.status(500).json({ status: "error", message });
            });
    };
    read = (req, res) => {
        const id = req.params.id;
        CategoryModel.find({ _id: id }).exec(function (err, messages) {
            if (err) {
                return res.status(404).json({ message: `Message not found` });
            }
            return res.json(messages);
        });
    };
}

export default CategoryCtrl;
