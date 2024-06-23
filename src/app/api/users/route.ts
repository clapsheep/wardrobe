import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const list = await User.find({});
    return NextResponse.json({ list });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};

export const POST = async (req: Request) => {
  try {
    await dbConnect();
    const data = await req.json();
    const user = new User(data);
    const res = await user.save();

    return NextResponse.json(res);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
