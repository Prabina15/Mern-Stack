import express from "express";

import fs from "fs/promises";
import config from "./config/config.js";

import productRoute from "./routes/product.route.js";
const app = express();

app.get("/", (request, response) => {
    response.send("Home page");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.post("/contact", (req, res)=> {
    res.send("Contact page");
});

app.use("/api/products", productRoute);
// app.get("/product", async(req, res)=> {
//     const products = await fs.readFile("src/data/products.json", "utf-8");

//     res.json(JSON.parse(products));

// });

// app.get("/product/first", async(req, res)=> {
//     const products = await fs.readFile("src/data/products.json", "utf-8");

//     const firstProduct = JSON.parse(products)[0];
//     res.json(firstProduct);

// });


app.listen(config.port, () => {
    console.log("Server is running at port 8000...");

});





