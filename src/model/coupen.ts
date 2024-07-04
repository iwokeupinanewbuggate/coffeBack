import mongoose from "mongoose";

const coupon = new mongoose.Schema({
  code: String,
  discount: String,
  expirationDate: Date,
});

const couponModel = mongoose.models.coupon || mongoose.model("coupon", coupon);

export default couponModel;
