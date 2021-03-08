import { WordCtrl } from "../controllers/index.js";

const WordRoutes = (app) => {
    const WordController = new WordCtrl();
    app.post("/word", WordController.create);
    app.get("/word/:userid", WordController.read);
    app.get("/word/index/:id", WordController.index);
    app.delete("/word/:id", WordController.delete);
    app.post("/word/update/:id", WordController.update);
};

export default WordRoutes;
