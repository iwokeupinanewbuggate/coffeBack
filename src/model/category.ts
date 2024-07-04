import mongoose from "mongoose";

const category = new mongoose.Schema({
  name: String,
});

const categoryModel =
  mongoose.models.category || mongoose.model("category", category);
export default categoryModel;
