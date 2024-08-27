import { StyleModal } from "@/components/organism";
import { getStyle } from "@/lib/api";

const Page = async ({ params }: { params: { styleId: string } }) => {
  const { styleId } = params;
  const style = await getStyle(styleId);

  return <StyleModal data={style} />;
};
export default Page;
