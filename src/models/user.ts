import { Schema, model, models } from "mongoose";

export const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    name: {
      first: { type: String, required: true },
      last: { type: String, required: true },
    },
    age: Number,
    email: String,
  },
  {
    timestamps: true,
  },
);
const User = models?.user || model("user", UserSchema);

export default User;
