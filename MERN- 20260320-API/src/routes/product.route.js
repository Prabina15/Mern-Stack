import express from "express";
import productController from "../Controllers/product.controller.js";

const router = express.Router();


router.get("/", productController.getAllProducts );

router.get("/first", productController.getFirstProduct );

//Dynamic route (:param)
router.get("/:id", productController.getProductById);

export default router;

