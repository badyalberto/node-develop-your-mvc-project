const Router = require("express").Router;
const { authMiddleware } = require("../middlewares");
const UserController = require("../controllers/user-controller");

const UserRouter = Router();


UserRouter.get("/", UserController.getAllUsers);

UserRouter.get("/:userId", UserController.getUserById);

UserRouter.post("/", UserController.createUser);

UserRouter.patch("/:userId", UserController.updateUser);

UserRouter.delete("/:userId", UserController.deleteUser);

module.exports = UserRouter;
