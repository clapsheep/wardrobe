import { dbConnect } from "@/lib/utils/dbConnect";
import { User } from "@/lib/models/schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { saltAndHashPassword } from "@/lib/utils";

export const GET = async () => {
  try {
    await dbConnect();
    const list = await User.find({});
    return Response.json({ list });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};

export const POST = async (req: Request) => {
  try {
    await dbConnect();
    const { username, password, userInfo } = await req.json();

    let user = await User.findOne({ username });
    if (user) {
      return Response.json({ error: "이미 사용중인 아이디입니다." });
    }

    user = new User({ username, password, userInfo });
    user.password = await saltAndHashPassword(password);
    await user.save();

    const payload = { user: { id: user._id } };
    let createdToken;
    jwt.sign(payload, "jwtSecret", { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      createdToken = token;
    });

    return Response.json({ createdToken });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
