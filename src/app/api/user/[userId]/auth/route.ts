import dbConnect from "@/lib/dbConnect"
import { User } from "@/models/schema";
import { isValidObjectId } from "mongoose";

export const GET = async(req:Request,{params}:{params:{userId:string}}) =>{
    try {
        dbConnect();
        const { userId } = params;
    if (!isValidObjectId(userId)) {
      return Response.json({ error: "유효하지 않은 Id 입니다." });
    }
        const user = await User.findById(userId).select("-password");
        return Response.json({user});
    }catch(error:any){
return Response.json({error:error.message})
    }
}