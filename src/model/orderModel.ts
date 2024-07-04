import mongoose from "mongoose";

const order = new mongoose.Schema({
  userId: String,
  product: [
    {
      productId: String,
      ingridient: String,
      size: String,
      price: Number,
      quantity: Number,
      ingridientAmount: Number,
    },
  ],
  orderedAt: { type: Date, default: Date.now() },
  deliveryLocation: String,
  status: { type: String, default: "Order placed" },
  couponCode: { type: String, default: "" },
});

const orderModel = mongoose.models.order || mongoose.model("order", order);

export default orderModel;
