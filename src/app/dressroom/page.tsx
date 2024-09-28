import { DressroomContent } from "@/components/organism";
import { getOneUser } from "@/lib/api";

const Page = async () => {
  const userId = "667c2764df7a458908b4b54b";
  const data = await getOneUser(userId);
  const { dressroom } = data;

  return (
    <main className="my-20 flex w-full px-[85px]">
      <h1 className="sr-only">드레스룸</h1>
      <DressroomContent items={dressroom} />
    </main>
  );
};

export default Page;
