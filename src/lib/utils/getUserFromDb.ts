import { dbConnect } from "@/lib/utils/dbConnect";
import { User } from "@/lib/models/schema";
import bcrypt from "bcrypt";

export async function getUserFromDb(username: string, password: string) {
  await dbConnect();

  const user = await User.findOne({ username });
  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return null;
  }

  return {
    id: user._id.toString(),
    username: user.username,
  };
}
