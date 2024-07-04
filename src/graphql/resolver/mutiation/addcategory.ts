import { MutationAddCategoryArgs } from "@/generated";
import categoryModel from "@/model/category";

export const addCategory = async (_: any, input: MutationAddCategoryArgs) => {
  const { name } = input.input;
  try {
    const newCategory = await categoryModel.create({ name });
    return newCategory;
  } catch (err) {
    throw new Error("Couldn't add new category");
  }
};
