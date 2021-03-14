import { WordModel } from "../models/index.js";

class WordCtrl {
    create = (req, res) => {
        const data = {
            engWord: req.body.engWord,
            rusWord: req.body.rusWord,
            create_on: new Date(),
            edit_on: new Date(),
            category: req.body.category_id,
            author: req.body.author_id,
        };
        
        new WordModel(data)
            .save()
            .then((word) => {
                res.json(word);
            })
            .catch((message) => {
                res.status(500).json({ status: "error", message });
            });
    };
    read = (req, res) => {
        console.log("read")
        const id = req.params.userid;
        WordModel.find({ author: id })
            .populate(["category", "author"])
            .exec(function (err, messages) {
                if (err) {
                    return res.status(404).json({ message: `Word not found` });
                }
                return res.json(messages);
            });
    };
    index = (req, res) => {
        const id = req.params.id;
        WordModel.findOne({ _id: id })
            .populate(["category", "author"])
            .exec(function (err, word) {
                if (err) {
                    return res.status(404).json({ message: `Word not found` });
                }
                return res.json(word);
            });
    };
    delete = (req, res) => {
        const id = req.params.id;
        WordModel.findOneAndDelete({ _id: id })
            .then((message) => {
                if (message) {
                    res.json({ message: `Word ${message._id} deleted` });
                }
            })
            .catch((message) => {
                res.json({ status: "error", message });
            });
    };
    update = (req, res) => {
        const attributes = Object.keys(req.body);

        const data = {};
        attributes.forEach((attr) => {
            if (attr === "category_id") {
                data.category = req.body["category_id"];
            } else {
                data[attr] = req.body[attr];
            }
        });
        data.edit_on = new Date();
        const id = req.params.id;

        WordModel.findOneAndUpdate({ _id: id }, data)
            .then((message) => {
                res.json(message);
            })
            .catch((message) => {
                res.status(500).json({ status: "error", message });
            });
    };
}

export default WordCtrl;
