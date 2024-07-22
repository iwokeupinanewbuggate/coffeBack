import { QueryGetOneProductArgs } from "@/generated";
import productModel from "@/model/productModel";

export const getOneProduct = async (_: any, id: QueryGetOneProductArgs) => {
  try {
    const res = await productModel.findOne({ _id: id.id });
    return res;
  } catch (err) {
    throw new Error("Couldn't get the product ");
  }
};
