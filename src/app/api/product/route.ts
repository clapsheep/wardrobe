import { dbConnect } from "@/lib/utils";
import { Product } from "@/lib/models/schema";

export const GET = async () => {
  try {
    await dbConnect();
    const list = await Product.find({});
    return Response.json({ list });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};

export const POST = async (req: Request) => {
  try {
    await dbConnect();
    const data = await req.json();
    const product = new Product(data);
    const res = await product.save();

    return Response.json(res);
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
