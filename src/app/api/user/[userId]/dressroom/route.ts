import dbConnect from "@/lib/dbConnect";
import Product from "@/models/product";
import User from "@/models/user";
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
    const userDressroom = await User.findById(userId).select("dressroom");

    if (!userDressroom) {
      throw new Error("사용자가 존재하지 않습니다.");
    }
    return Response.json({ userDressroom });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};

export const POST = async (
  req: Request,
  { params }: { params: { userId: string } },
) => {
  try {
    await dbConnect();
    const { userId } = params;
    if (!isValidObjectId(userId)) {
      return Response.json({ error: "유효하지 않은 Id 입니다." });
    }

    const { site, name, image, price, category, color, season, size } =
      await req.json();

    const newDressroomItem = {
      _id: null,
      site,
      name,
      image,
      price,
      category,
      color,
      season,
      size,
    };

    let newProduct = await Product.findOne({ site });

    if (!!newProduct) {
      newDressroomItem._id = newProduct._id;
    } else {
      newProduct = new Product({ site, name, image, price, category });
      newProduct = await newProduct.save();
      newDressroomItem._id = newProduct._id;
    }

    await User.updateOne(
      { _id: userId },
      {
        $push: {
          dressroom: newDressroomItem,
        },
      },
    );
    return Response.json({ newDressroomItem });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
