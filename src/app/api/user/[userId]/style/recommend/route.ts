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
    const dressroomProducts = user.dressroom.map((item: TDressroom) => {
      return { id: item._id, name: item.name };
    });

    const getShuffleFiveItems = dressroomProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    const styles = await Promise.all(
      getShuffleFiveItems.map(async (product: { id: string; name: string }) => {
        const style = await Style.find({
          product: product.id,
        }).limit(7);
        const data = {
          name: product.name,
          productId: product.id,
          style: style,
        };
        return data;
      }),
    );
    return Response.json(styles);
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
