import orderModel from "@/model/orderModel";

export const getOrders = async () => {
  try {
    const res = await orderModel.find({});
    return res;
  } catch (err) {
    throw new Error("Couldn't get orders");
  }
};
