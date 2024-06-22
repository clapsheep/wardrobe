interface Mongo {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
interface User {
  username: string;
  name: { first: string; last: string };
  age: number;
  email: string;
}
export interface TUser extends User, Mongo {}
export type TCollection = "users";
