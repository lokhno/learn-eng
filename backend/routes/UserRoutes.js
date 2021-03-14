import { UserCtrl } from "../controllers/index.js";

import AuthenticateToken from "../middlewares/AuthenticateToken.js";

const UserRoutes = (app) => {
    const UserController = new UserCtrl();
    app.get("/users/me", AuthenticateToken, UserController.getMe);
    app.post("/users", UserController.create);
    app.get("/users/:id", UserController.read);
    app.post("/users/login", UserController.login);
};

export default UserRoutes;
