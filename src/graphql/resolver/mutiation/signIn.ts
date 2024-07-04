import { MutationSignInArgs } from "@/generated";
import userModel from "@/model/userModel";

export const signIn = async (_: any, input: MutationSignInArgs) => {
  const { name, email, password } = input.input;
  try {
    const user = await userModel.create({ name, password, email });
    return user;
  } catch (err) {
    throw new Error("Couldn't sign in");
  }
};
