export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: Category;
  addCoupon: Coupon;
  addProduct: Product;
  createOrder: Order;
  deleteUser: User;
  editProduct: Product;
  login: User;
  removeProduct: Product;
  signIn: User;
};


export type MutationAddCategoryArgs = {
  input: CategoryInput;
};


export type MutationAddCouponArgs = {
  input: CouponInput;
};


export type MutationAddProductArgs = {
  input: ProductInfo;
};


export type MutationCreateOrderArgs = {
  input: OrderInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditProductArgs = {
  input: EditProduct;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignInArgs = {
  input: UserInput;
};

export type PriceType = {
  __typename?: 'PriceType';
  large: Scalars['Int']['output'];
  meduim: Scalars['Int']['output'];
  small: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCategory?: Maybe<Array<Category>>;
  getMyOrders: Order;
  getOneProduct: Product;
  getOrders?: Maybe<Array<Order>>;
  getProduct: Array<Product>;
  getUser: User;
};


export type QueryGetMyOrdersArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOneProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type Category = {
  __typename?: 'category';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CategoryInput = {
  name: Scalars['String']['input'];
};

export type Coupon = {
  __typename?: 'coupon';
  code: Scalars['String']['output'];
  discount: Scalars['String']['output'];
  expirationDate: Scalars['Date']['output'];
};

export type CouponInput = {
  code: Scalars['String']['input'];
  discount: Scalars['String']['input'];
  expirationDate: Scalars['Date']['input'];
};

export type EditProduct = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: PriceInputType;
  productId: Scalars['ID']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'order';
  couponCode: Scalars['String']['output'];
  deliveryLocation: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  orderedAt: Scalars['Date']['output'];
  product: Array<Maybe<OrderProductinfo>>;
  status: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type OrderInput = {
  couponCode: Scalars['String']['input'];
  deliveryLocation: Scalars['String']['input'];
  product?: InputMaybe<Array<InputMaybe<ProductInfoInput>>>;
  userId: Scalars['String']['input'];
};

export type OrderProductinfo = {
  __typename?: 'orderProductinfo';
  ingridient: Scalars['String']['output'];
  ingridientAmount: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  productId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  size: Scalars['String']['output'];
};

export type PaymentType = {
  __typename?: 'paymentType';
  cardHolder?: Maybe<Scalars['String']['output']>;
  cardNumber?: Maybe<Scalars['String']['output']>;
  cvv?: Maybe<Scalars['String']['output']>;
  experitionDate?: Maybe<Scalars['String']['output']>;
};

export type PriceInputType = {
  large: Scalars['Int']['input'];
  meduim: Scalars['Int']['input'];
  small: Scalars['Int']['input'];
};

export type Product = {
  __typename?: 'product';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price?: Maybe<PriceType>;
};

export type ProductInfo = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: PriceInputType;
};

export type ProductInfoInput = {
  ingridient: Scalars['String']['input'];
  ingridientAmount: Scalars['Int']['input'];
  price: Scalars['Int']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  size: Scalars['String']['input'];
};

export type User = {
  __typename?: 'user';
  address?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  favorite: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  paymentinfo?: Maybe<PaymentType>;
  profilePic?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


