import { dbConnect } from "@/lib/utils";
import { User } from "@/lib/models/schema";
import { isValidObjectId } from "mongoose";

export const POST = async (
  req: Request,
  { params }: { params: { userId: string; styleId: string } },
) => {
  try {
    await dbConnect();
    const { userId, styleId } = params;
    if (!isValidObjectId(userId)) {
      return Response.json({ error: "유효하지 않은 userId 입니다." });
    }
    if (!isValidObjectId(styleId)) {
      return Response.json({ error: "유효하지 않은 styleId 입니다." });
    }

    const user = await User.updateOne(
      { _id: userId },
      { $push: { bookmark: styleId } },
    );

    return Response.json({ user });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
export const DELETE = async (
  req: Request,
  { params }: { params: { userId: string; styleId: string } },
) => {
  try {
    await dbConnect();
    const { userId, styleId } = params;
    if (!isValidObjectId(userId)) {
      return Response.json({ error: "유효하지 않은 userId 입니다." });
    }
    if (!isValidObjectId(styleId)) {
      return Response.json({ error: "유효하지 않은 styleId 입니다." });
    }
    const bookmark = await User.updateOne(
      { _id: userId },
      { $pull: { bookmark: styleId } },
    );
    if (bookmark.modifiedCount === 0) {
      return Response.json({ error: "더이상 삭제할 북마크가 없습니다." });
    }
    return Response.json({ bookmark });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
