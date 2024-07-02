import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/schema";
import { isValidObjectId } from "mongoose";


export const POST = async (req:Request, {params}:{params:{userId:string, styleId:string}})=> {
    try {
      await dbConnect();
      const { userId, styleId } = params;
      if (!isValidObjectId(userId)) {
        return Response.json({ error: "유효하지 않은 userId 입니다." });
      }
      
      const user = await User.updateOne({_id:userId},{$push:{bookmark:styleId}},{new:true})
      return Response.json({user})
    } catch (error: any) {
      return Response.json({ error: error.message });
    }
  };