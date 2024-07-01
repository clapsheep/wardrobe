import dbConnect from "@/lib/dbConnect";
import { User, Style } from "@/models/schema";
import { TDressroom } from "@/types/DatabaseTypes";
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
    const user = await User.findById(userId);
    const dressroomproductId = user.dressroom.map(
      (item: TDressroom) => item._id,
    );
    const styles = await Style.aggregate([
      { $match: { product: { $in: dressroomproductId } } },
      {
        $lookup: {
          from: "product",
          localField: "product",
          foreignField: "_id",
          as: "productDetails",
        },
      },
      { $project: { _id: 1, image: 1, hashtag: 1, productDetails: 1 } },
    ]);
    return Response.json({ styles });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
