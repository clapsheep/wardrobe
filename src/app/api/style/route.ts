import { dbConnect } from "@/lib/utils";
import { Style } from "@/lib/models/schema";

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
