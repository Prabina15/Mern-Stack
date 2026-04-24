import productService from "../services/product.service.js";

const getAllProducts = async(req, res)=> {
    const products = await productService.getAllProducts();

    res.json(products);
};

const getFirstProduct = async(req, res)=> {
    const product= await productService.getFirstProduct();

    res.json(product);
};
const getProductById = async(req, res) => {
    const id = req.params.id;
    const product = await productService.getProductById();

    if (!product) return res.status(404).json({message: "Product not found"});

    res.json(product);
};

export default {getAllProducts, getFirstProduct, getProductById};