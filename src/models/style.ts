import { Schema, model, models, Types } from "mongoose";

export const StyleSchema = new Schema(
  {
    createUser: { type: Types.ObjectId, require: true, ref: "user" },
    product: { type: Types.ObjectId, require: true, ref: "product" },

    image: { type: String, require: true },
    hashtag: { type: [String] },
  },
  { timestamps: true, collection: "style" },
);

const Style = models?.style || model("style", StyleSchema);
export default Style;
