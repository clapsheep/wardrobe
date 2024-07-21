import { Schema, model, models, Types } from "mongoose";

export const ProductSchema = new Schema(
  {
    site: { type: String, require: true },
    name: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: String, require: true },
  },
  { timestamps: true, collection: "product" },
);

export const Product = models?.product || model("product", ProductSchema);

export const StyleSchema = new Schema(
  {
    createUser: { type: Types.ObjectId, require: true, ref: "user" },
    product: [{ type: Types.ObjectId, require: true, ref: "product" }],
    image: { type: String, require: true },
    hashtag: { type: [String] },
  },
  { timestamps: true, collection: "style" },
);

export const Style = models?.style || model("style", StyleSchema);

const UserStyleSchema = new Schema(
  {
    _id: { type: Types.ObjectId, require: true },
    product: [{ type: Types.ObjectId, require: true, ref: "product" }],
    image: { type: String, require: true },
    hashtag: { type: [String] },
  },
  { timestamps: true },
);

const DressroomItemSchema = new Schema({
  _id: { type: Types.ObjectId, required: true },
  site: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  color: { type: String, require: true },
  season: { type: [String] },
  size: { type: String, require: true },
});

export const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, minLength: 8, require: true },
    image: { type: String },
    userInfo: {
      weight: { type: Number },
      height: { type: Number },
      top: { type: String },
      bottom: { type: String },
    },
    dressroom: [{ type: DressroomItemSchema }],
    styles: [{ type: UserStyleSchema }],
    // styles: [{ type: Types.ObjectId, ref: "style" }],
    bookmark: [{ type: Types.ObjectId, ref: "style" }],
    like: [{ type: Types.ObjectId, ref: "style" }],
  },
  {
    timestamps: true,
    collection: "user",
  },
);
export const User = models?.user || model("user", UserSchema);
User.createIndexes();
