import { MutationLoginArgs } from "@/generated";
import userModel from "@/model/userModel";

export const login = async (_: any, input: MutationLoginArgs) => {
  const { email, password } = input.input;
  try {
    const user = await userModel.findOne({ email: email, password: password });
    if (!user) {
      throw new Error("User not found");
    } else if (password === user.password) {
      throw new Error("Password is wrong");
    }
    return user;
  } catch (err) {
    throw new Error("Couldn't find the user");
  }
};
