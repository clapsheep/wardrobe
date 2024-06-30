import { Schema, model, models } from "mongoose";

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

const Product = models?.product || model("product", ProductSchema);
export default Product;
