import { CategoryCtrl } from "../controllers/index.js";

const CategoryRoutes = (app) => {
    const CategoryController = new CategoryCtrl();
    app.post("/category", CategoryController.create);
    app.get("/category/:userid", CategoryController.read);
};

export default CategoryRoutes;
