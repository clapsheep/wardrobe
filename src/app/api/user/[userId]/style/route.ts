import { dbConnect } from "@/lib/utils";
import { Style, User } from "@/lib/models/schema";

import { isValidObjectId } from "mongoose";

export const GET = async (
  req: Request,
  { params }: { params: { userId: string } },
) => {
  try {
    await dbConnect();
    const { userId } = params;
    if (!isValidObjectId(userId)) {
      return Response.json({ error: "유효하지 않은 Id 입니다." });
    }
    const userDressroom = await User.findById(userId).select("style");

    if (!userDressroom) {
      throw new Error("사용자가 존재하지 않습니다.");
    }
    return Response.json({ userDressroom });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};

export const POST = async (
  req: Request,
  { params }: { params: { userId: string } },
) => {
  try {
    await dbConnect();
    const { userId } = params;
    if (!isValidObjectId(userId)) {
      return Response.json({ error: "유효하지 않은 Id 입니다." });
    }
    const createUser = userId;
    const { product, image, hashtag } = await req.json();

    const style = new Style({ createUser, product, image, hashtag });
    const newStyle = await style.save();

    await User.updateOne(
      { _id: userId },
      {
        $push: {
          styles: { _id: newStyle._id, product, image, hashtag },
        },
      },
    );
    return Response.json({ newStyle });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
