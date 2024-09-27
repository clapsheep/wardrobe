import { dbConnect } from "@/lib/utils";
import { User } from "@/lib/models/schema";
import { isValidObjectId } from "mongoose";

export const DELETE = async (
  req: Request,
  { params }: { params: { userId: string; productId: string } },
) => {
  try {
    await dbConnect();
    const { userId, productId } = params;
    if (!isValidObjectId(userId)) {
      return Response.json({ error: "유효하지 않은 userId 입니다." });
    }
    if (!isValidObjectId(productId)) {
      return Response.json({ error: "유효하지 않은 productId 입니다." });
    }
    const res = await User.updateOne(
      { _id: userId },
      {
        $pull: {
          dressroom: { _id: productId },
        },
      },
    );
    if (res.modifiedCount === 0) {
      return Response.json({ error: "해당 상품이 존재하지 않습니다." });
    }
    return Response.json({ message: "상품 삭제 성공" });
  } catch (error: any) {
    return Response.json({ error: error.mesage });
  }
};

export const PATCH = async (
  req: Request,
  { params }: { params: { userId: string; productId: string } },
) => {
  try {
    await dbConnect();
    const { userId, productId } = params;
    if (!isValidObjectId(userId)) {
      return Response.json({ error: "유효하지 않은 userId 입니다." });
    }
    if (!isValidObjectId(productId)) {
      return Response.json({ error: "유효하지 않은 productId 입니다." });
    }

    const updateData = await req.json();

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId, "dressroom._id": productId },
      { $set: { "dressroom.$": updateData } },
      { new: true, runValidators: true },
    );
    return Response.json({ updatedUser });
  } catch (error: any) {
    return Response.json({ error: error.mesage });
  }
};
