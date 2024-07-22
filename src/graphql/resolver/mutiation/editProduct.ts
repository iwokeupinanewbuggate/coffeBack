import { MutationEditProductArgs } from "@/generated";
import productModel from "@/model/productModel";

export const editProduct = async (_: any, input: MutationEditProductArgs) => {
  const { productId, name, description, image, price, category } = input.input;
  try {
    const editedProduct = await productModel.findByIdAndUpdate(productId, {
      name: name,
      description: description,
      image: image,
      price: {
        large: price.large,
        meduim: price.meduim,
        small: price.small,
      },
      category: category,
    });
    return editedProduct;
  } catch (err) {
    console.error(err);
  }
};
