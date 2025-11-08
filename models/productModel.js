import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a product title"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
    },
    image: {
      type: String,
      required: [true, "Please add an image URL"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
