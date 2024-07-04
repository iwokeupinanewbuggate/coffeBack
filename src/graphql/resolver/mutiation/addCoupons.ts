import { MutationAddCouponArgs } from "@/generated";
import couponModel from "@/model/coupen";

export const addCoupon = async (_: any, input: MutationAddCouponArgs) => {
  const { code, discount, expirationDate } = input.input;
  try {
    const coupon = await couponModel.create({code, discount, expirationDate});
    return coupon
  } catch (err) {
    throw new Error("Couldn't add coupon")
  }
};
