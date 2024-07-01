import dbConnect from "@/lib/dbConnect";
import { User, Product } from "@/models/schema";
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

    const body = await req.json();
    const { name, image, price, category, color, season, size } = body;
    const site = body.site.split("?")[0];

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
    let checkedSavedProduct = await Product.findOne({ site });

    if (!checkedSavedProduct) {
      checkedSavedProduct = new Product({
        site,
        name,
        image,
        price,
        category,
      });
      checkedSavedProduct = await checkedSavedProduct.save();
    }
    newDressroomItem._id = checkedSavedProduct._id;

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

export const DELETE = async (
  req: Request,
  { params }: { params: { userId: string } },
) => {
  try {
    await dbConnect();
    const { userId } = params;
    if (!isValidObjectId(userId)) {
      return Response.json({ error: "유효하지 않은 Id 입니다." });
    }
    // const formData = await req.formData();
    // const productIdList = formData.get("productId");
    const productIdList = ["667d193aa971c650bb00bdc4"];

    if (!Array.isArray(productIdList)) {
      return Response.json({ error: "productIdList는 배열 형태여야 합니다." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return Response.json({ error: "사용자를 찾을 수 없습니다." });
    }

    user.dressroom = user.dressroom.filter(
      (item: TDressroom) => !productIdList.includes(item._id.toString()),
    );

    await user.save();

    return Response.json({ message: "아이템 삭제 성공" });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
