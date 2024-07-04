import mongoose from "mongoose";

const product = new mongoose.Schema({
  name: String,
  description: String,
  price: {
    small: Number,
    meduim: Number,
    large: Number,
  },
  category: String,
  image: String,
});

const productModel =
  mongoose.models.product || mongoose.model("product", product);

export default productModel;
