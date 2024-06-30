interface Mongo {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
interface User {
  username: string;
  passward: string;
  userInfo: { weight: number; hieght: number };
}
interface Product {
  site: string;
  name: string;
  image: string;
  price: number;
  color: string;
  weather: string[];
  size: string;
  category: string[];
}
interface Style {
  image: string;
  hashtag: string[];
}
export interface TUser extends User, Mongo {}
export interface TProduct extends Product, Mongo {}
export interface TStyle extends Style, Mongo {}

export type TCollection = "user" | "product" | "style";
