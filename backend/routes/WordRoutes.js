import { WordCtrl } from "../controllers/index.js";

const WordRoutes = (app) => {
    const WordController = new WordCtrl();
    app.post("/word", WordController.create);
    app.get("/word/:userid", WordController.read);
};

export default WordRoutes;
