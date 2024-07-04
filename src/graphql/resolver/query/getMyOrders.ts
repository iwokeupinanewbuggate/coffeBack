import { QueryGetMyOrdersArgs } from "@/generated";
import orderModel from "@/model/orderModel";

export const getMyOrders = async (_: any, id: QueryGetMyOrdersArgs) => {
  try {
    const orders = await orderModel.find({ userId: id.id });
    console.log(orders);
    return orders;
  } catch (err) {
    throw new Error("Couldn't find your orders");
  }
};
