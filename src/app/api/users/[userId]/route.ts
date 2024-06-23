import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { userId: string } },
) => {
  try {
    await dbConnect();
    const { userId } = params;
    if (!isValidObjectId(userId)) {
      return NextResponse.json({ error: "유효하지 않은 Id 입니다." });
    }
    const user = await User.findOne({ _id: userId });
    return NextResponse.json({ user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { userId: string } },
) => {
  try {
    await dbConnect();
    const { userId } = params;
    const user = await User.findOneAndDelete({ _id: userId });
    return NextResponse.json({ user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
