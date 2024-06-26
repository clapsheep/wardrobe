import { Schema, model, models, Types } from "mongoose";

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
    userInfo: { weight: { type: Number }, height: { type: Number } },
    dressroom: [{ type: DressroomItemSchema, require: true }],
    styles: { type: [Types.ObjectId], ref: "style" },
    bookmark: { type: [Types.ObjectId], ref: "style" },
    like: { type: [Types.ObjectId], ref: "style" },
  },
  {
    timestamps: true,
    collection: "user",
  },
);
const User = models?.user || model("user", UserSchema);
User.createIndexes();
export default User;
