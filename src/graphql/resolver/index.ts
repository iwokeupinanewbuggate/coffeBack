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
import { getProductCategory } from "./query/getOneCategory";
import { getProduct } from "./query/getProduct";

export const resolvers = {
  Query: {
    getProduct,
    getUser,
    getMyOrders,
    getCategory,
    getOrders,
    getOneProduct,
    getProductCategory,
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
