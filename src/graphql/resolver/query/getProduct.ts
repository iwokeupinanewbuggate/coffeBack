import prodectModel from "@/model/productModel";

export const getProduct = async () => {
  try {
    const body = await prodectModel.find({});
    return body;
  } catch (err) {
    throw new Error("Failed to fetch");
  }
};
