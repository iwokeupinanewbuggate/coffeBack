import { MutationRemoveProductArgs } from "@/generated";
import productModel from "@/model/productModel";

export const removeProduct = async (_: any, id: MutationRemoveProductArgs) => {
  try {
    const removedBody = await productModel.findByIdAndDelete(id.id);
    return removedBody;
  } catch (err) {
    throw new Error("Could't find the product or product already removed");
  }
};
