import {
  addCategory,
  addCoupon,
  addProduct,
  createOrder,
  deleteUser,
  login,
  removeProduct,
  signIn,
} from "./mutiation";
import { getMyOrders, getUser } from "./query";
import { getProduct } from "./query/getProduct";

export const resolvers = {
  Query: {
    getProduct,
    getUser,
    getMyOrders
  },
  Mutation: {
    addProduct,
    removeProduct,
    signIn,
    login,
    createOrder,
    addCategory,
    deleteUser,
    addCoupon
  },
};
