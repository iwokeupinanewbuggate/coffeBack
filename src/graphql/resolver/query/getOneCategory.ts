import categoryModel from "@/model/category";
import { QueryGetProductCategoryArgs } from "@/generated";

export const getProductCategory = async (
  _: any,
  id: QueryGetProductCategoryArgs
) => {
  try {
    const res = await categoryModel.findOne({ _id: id.id });
    return res;
  } catch (err) {
    throw new Error("Could't get category");
  }
};
