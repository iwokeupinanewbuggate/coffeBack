import { MutationAddProductArgs } from "@/generated";
import productModel from "@/model/productModel";

export const addProduct = async (_: any, input: MutationAddProductArgs) => {
  const { name, price, category, image, description } = input.input;
  try {
    const response = await productModel.create({
      name,
      price,
      category,
      image,
      description,
    });
    return response;
  } catch (err) {
    throw new Error("Could't add product");
  }
};
