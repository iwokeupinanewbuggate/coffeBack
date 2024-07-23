import categoryModel from "@/model/category";

export const getProductCategory = async (_: any, id: any) => {
  try {
    const res = await categoryModel.findOne({ _id: id.id });
    return res;
  } catch (err) {
    throw new Error("Could't get category");
  }
};
