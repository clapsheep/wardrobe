interface Mongo {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
interface User {
  username: string;
  passward: string;
  userInfo: { weight: number; hieght: number };
  dressroom: TDressroom[];
  styles: String;
  bookmark: String;
  like: String;
}

interface Style {
  createUser: String;
  product: String[];
  image: string;
  hashtag: string[];
}
interface Product {
  site: string;
  name: string;
  image: string;
  price: number;
  category: string;
}
interface DressroomItem {
  color: string;
  season: string[];
  size: string;
}
export interface TUser extends User, Mongo {}
export interface TDressroom extends Product, DressroomItem, Mongo {}
export interface TProduct extends Product, Mongo {}
export interface TStyle extends Style, Mongo {}

export type TCollection = "user" | "product" | "style";
