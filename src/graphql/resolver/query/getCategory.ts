import categoryModel from "@/model/category";

export const getCategory = async (_: any) => {
  try {
    const body = await categoryModel.find({});
    return body;
  } catch (err) {
    throw new Error("Couldn't get category");
  }
};
