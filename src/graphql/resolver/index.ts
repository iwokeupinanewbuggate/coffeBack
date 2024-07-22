import {
  addCategory,
  addCoupon,
  addProduct,
  createOrder,
  deleteUser,
  editProduct,
  login,
  removeProduct,
  signIn,
} from "./mutiation";
import {
  getCategory,
  getMyOrders,
  getOneProduct,
  getOrders,
  getUser,
} from "./query";
import { getProduct } from "./query/getProduct";

export const resolvers = {
  Query: {
    getProduct,
    getUser,
    getMyOrders,
    getCategory,
    getOrders,
    getOneProduct,
  },
  Mutation: {
    addProduct,
    removeProduct,
    signIn,
    login,
    createOrder,
    addCategory,
    deleteUser,
    addCoupon,
    editProduct,
  },
};
