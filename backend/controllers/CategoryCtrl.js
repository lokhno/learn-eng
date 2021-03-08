import { CategoryModel } from "../models/index.js";

class CategoryCtrl {
    create = (req, res) => {
        const data = {
            title: req.body.title,
            create_on: new Date(),
            edit_on: new Date(),
            author: req.body.author_id,
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
        const id = req.params.userid;
        CategoryModel.find({ author: id })
            .populate(["author"])
            .exec(function (err, messages) {
                if (err) {
                    return res.status(404).json({ message: `Message not found` });
                }
                return res.json(messages);
            });
    };
    delete = (req, res) => {
        const id = req.params.id;
        CategoryModel.findOneAndDelete({ _id: id })
            .then((message) => {
                if (message) {
                    res.json({ message: `Category ${message._id} deleted` });
                }
            })
            .catch((message) => {
                res.json({ status: "error", message });
            });
    };
    update = (req, res) => {
        const attribute = Object.keys(req.body)[0];

        const data = {};
        data[attribute] = req.body[attribute];
        data.edit_on = new Date();
        const id = req.params.id;

        CategoryModel.findOneAndUpdate({ _id: id }, data)
            .then((message) => {
                res.json(message);
            })
            .catch((message) => {
                res.status(500).json({ status: "error", message });
            });
    };
}

export default CategoryCtrl;
