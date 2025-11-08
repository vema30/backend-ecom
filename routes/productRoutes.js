import express from "express";
import Product from "../models/productModel.js"; // Your Mongoose model
import data from "./data.js"; // Your products array
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Bulk insert products (call this only once)
router.post("/insert-products", async (req, res) => {
  try {
    const createdProducts = await Product.insertMany(data, { ordered: false }); 
    res
      .status(201)
      .json({ message: "Products inserted successfully!", createdProducts });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Standard CRUD routes
router.route("/")
  .get(getProducts)
  .post(createProduct);

router.route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
