import { MutationLoginArgs } from "@/generated";
import userModel from "@/model/userModel";

export const login = async (_: any, input: MutationLoginArgs) => {
  const { email, password } = input.input;
  try {
    const user = await userModel.findOne({ email: email, password: password });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (err) {
    throw new Error("Couldn't find the user");
  }
};
