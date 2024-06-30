import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    const user = new User({ username, password, userInfo });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
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
