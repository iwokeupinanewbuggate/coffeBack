import { QueryGetUserArgs } from "@/generated";
import userModel from "@/model/userModel";

export const getUser = async (_: any, id: QueryGetUserArgs) => {
  try {
    const user = await userModel.findOne({ _id: id.id });
    return user;
  } catch (err) {
    throw new Error("Couldnt find the user");
  }
};
