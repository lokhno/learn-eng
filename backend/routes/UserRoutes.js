import { UserCtrl } from "../controllers/index.js";

const UserRoutes = (app) => {
    const UserController = new UserCtrl();
    app.post("/users", UserController.create);
    app.get("/users/:id", UserController.read);
};

export default UserRoutes;
