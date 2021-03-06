import { WordModel } from "../models/index.js";

class WordCtrl {
    create = (req, res) => {
        const data = {
            engWord: req.body.engWord,
            rusWord: req.body.rusWord,
            create_on: new Date(),
            edit_on: new Date(),
            category: req.body.category_id,
            author: req.body.author_id
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
        const id = req.params.userid;
        WordModel.find({ author: id }).populate(["category", "author"])
        .exec(function (err, messages) {
            if (err) {
                return res.status(404).json({ message: `Message not found` });
            }
            return res.json(messages);
        });
    };
}

export default WordCtrl;
