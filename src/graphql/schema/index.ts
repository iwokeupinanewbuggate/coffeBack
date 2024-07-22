import gql from "graphql-tag";

export const typeDefs = gql`
  scalar Date
  type product {
    id: ID!
    name: String!
    price: PriceType
    category: String!
    image: String!
    description: String!
  }

  type PriceType {
    small: Int!
    meduim: Int!
    large: Int!
  }

  input productInfo {
    name: String!
    price: priceInputType!
    category: String!
    image: String!
    description: String!
  }

  input editProduct {
    productId: ID!
    name: String!
    price: priceInputType!
    category: String!
    image: String!
    description: String!
  }

  input priceInputType {
    small: Int!
    meduim: Int!
    large: Int!
  }

  type user {
    id: ID!
    name: String!
    email: String!
    password: String!
    favorite: [String]!
    profilePic: String
    address: String
    paymentinfo: paymentType
  }

  type paymentType {
    cardHolder: String
    cardNumber: String
    experitionDate: String
    cvv: String
  }

  input userInput {
    name: String!
    email: String!
    password: String!
  }

  input loginInput {
    email: String!
    password: String!
  }

  type order {
    id: ID!
    userId: ID!
    product: [orderProductinfo]!
    deliveryLocation: String!
    status: String!
    couponCode: String!
    orderedAt: Date!
  }

  type orderProductinfo {
    productId: ID!
    ingridient: String!
    size: String!
    price: Int!
    quantity: Int!
    ingridientAmount: Int!
  }

  input orderInput {
    userId: String!
    product: [productInfoInput]
    deliveryLocation: String!
    couponCode: String!
  }

  input productInfoInput {
    productId: ID!
    ingridient: String!
    size: String!
    price: Int!
    quantity: Int!
    ingridientAmount: Int!
  }

  type category {
    id: ID!
    name: String!
  }

  input categoryInput {
    name: String!
  }

  type coupon {
    code: String!
    discount: String!
    expirationDate: Date!
  }

  input couponInput {
    code: String!
    discount: String!
    expirationDate: Date!
  }

  type Query {
    getProduct: [product!]!
    getUser(id: ID!): user!
    getMyOrders(id: ID!): order!
    getCategory: [category!]
    getOrders: [order!]
    getOneProduct(id: ID!): product!
  }

  type Mutation {
    addProduct(input: productInfo!): product!
    removeProduct(id: ID!): product!
    signIn(input: userInput!): user!
    login(input: loginInput!): user!
    createOrder(input: orderInput!): order!
    addCategory(input: categoryInput!): category!
    deleteUser(id: ID!): user!
    addCoupon(input: couponInput!): coupon!
    editProduct(input: editProduct!): product!
  }
`;
