import { CategoryCtrl } from "../controllers/index.js";

const CategoryRoutes = (app) => {
    const CategoryController = new CategoryCtrl();
    app.post("/category", CategoryController.create);
    app.get("/category/:userid", CategoryController.read);
    app.delete("/category/:id", CategoryController.delete);
    app.post("/category/update/:id", CategoryController.update);
};

export default CategoryRoutes;
