import express from "express";
import userController from "../Controllers/user.controller.js";

const router = express.Router();

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getById);

router.post("/", userController.createUser);

router.put("/:id", userController.updateUser);

router.delete("/", userController.deleteUser);


export default router;
