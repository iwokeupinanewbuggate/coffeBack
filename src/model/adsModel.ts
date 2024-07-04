import mongoose from "mongoose";

const ads = new mongoose.Schema({
  productionId: String,
  title: String,
  description: String,
});

const adsModel = mongoose.models.ads || mongoose.model("ads", ads);

export default adsModel;
