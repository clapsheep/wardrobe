import { dbConnect } from "@/lib/utils";
import { User } from "@/lib/models/schema";
import { isValidObjectId } from "mongoose";

export const GET = async (
  req: Request,
  { params }: { params: { userId: string } },
) => {
  try {
    await dbConnect();
    const { userId } = params;
    if (!isValidObjectId(userId)) {
      return Response.json({ error: "유효하지 않은 userId 입니다." });
    }
    const bookmark = await User.findById(userId)
      .select("bookmark")
      .populate({ path: "bookmark" });
    return Response.json({ bookmark });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
