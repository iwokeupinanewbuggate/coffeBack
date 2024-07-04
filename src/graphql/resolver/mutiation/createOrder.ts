import { MutationCreateOrderArgs } from "@/generated";
import orderModel from "@/model/orderModel";

export const createOrder = async (_: any, input: MutationCreateOrderArgs) => {
  const {
    userId,
    deliveryLocation,
    couponCode,
    product,
  } = input.input;

  try {
    const response = await orderModel.create({
      userId,
      deliveryLocation,
      couponCode,
      product,
    });
    return response;
  } catch (err) {
    console.error(err);
  }
};
