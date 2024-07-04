import { MutationDeleteUserArgs } from "@/generated";
import userModel from "@/model/userModel";

export const deleteUser = async (_: any, id: MutationDeleteUserArgs) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(id.id);
    return deletedUser;
  } catch (err) {
    throw new Error("Couldn't delete the account");
  }
};
