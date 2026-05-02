import express from "express";
import dotenv from "dotenv";
dotenv.config();

import config from "./config/config.js";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import connectDB from "./config/database.js";
import bodyParser from "body-parser";
import logger from "./middlewares/logger.js";
import auth from "./middlewares/auth.js";

const app = express();
connectDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(logger);



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
app.use("/api/users",auth,  userRoute);
app.use("/api/auth",authRoute);
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





