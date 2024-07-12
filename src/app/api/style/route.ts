import dbConnect from "@/lib/dbConnect";
import { Style } from "@/models/schema";

// 스타일 랜덤하게 GET
export const GET = async () => {
  try {
    await dbConnect();
    const list = await Style.aggregate([{ $sample: { size: 10 } }]);

    return Response.json(list);
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
