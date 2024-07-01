import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/schema";
import { isValidObjectId } from "mongoose";
import { type NextRequest } from "next/server";
//http://localhost:3000/api/user/667c2764df7a458908b4b54b/dressroom/query?season=summer&color=black&category=top
export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } },
) => {
  try {
    await dbConnect();
    const { userId } = params;
    if (!isValidObjectId(userId)) {
      return Response.json({ error: "유효하지 않은 Id 입니다." });
    }
    const searchParams = req.nextUrl.searchParams;

    const season = searchParams.get("season");
    const color = searchParams.get("color");
    const category = searchParams.get("category");
    const sort = searchParams.get("sort");

    console.log(userId, season, color, category, sort);

    // 인덱스 학습 후 필터링 하는 방법을 배워서 적용해야함
    const userDressroom = await User.findById(userId).select("dressroom");

    if (!userDressroom) {
      throw new Error("사용자가 존재하지 않습니다.");
    }
    return Response.json({ userDressroom });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
