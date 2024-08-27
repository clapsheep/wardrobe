import { createUser } from "./../../../../lib/api/fetch";
import { dbConnect } from "@/lib/utils/dbConnect";
import { Style } from "@/lib/models/schema";
import { isValidObjectId } from "mongoose";

export const GET = async (
  req: Request,
  { params }: { params: { styleId: string } },
) => {
  try {
    await dbConnect();
    const { styleId } = params;
    if (!isValidObjectId(styleId)) {
      return Response.json({ error: "유효하지 않은 Id 입니다." });
    }

    const style = await Style.findOne({ _id: styleId })
      .populate({
        path: "createUser",
      })
      .populate({ path: "product" });
    return Response.json(style);
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
