import { BasicButton, TagButton } from "@/components/atoms";
import { getOneUser } from "@/lib/api";
import Image from "next/image";

const Page = async () => {
  const userId = "667c2764df7a458908b4b54b";
  const data = await getOneUser(userId);
  const { dressroom } = data;

  return (
    <main className="my-20 flex w-full px-[85px]">
      <aside className="w-[300px]">filter</aside>
      <section className="flex w-full flex-col">
        <div className="mb-[38px] flex justify-between">
          <div className="flex gap-3">
            <TagButton color="secondary">최신순</TagButton>
            <TagButton color="secondary">업로드순</TagButton>
            <TagButton color="secondary">가다나순</TagButton>
            <TagButton color="secondary">낮은 가격순</TagButton>
            <TagButton color="secondary">높은 가격순</TagButton>
          </div>
          <div className="flex gap-3">
            <BasicButton className="px-4" size="sm" color="primary" href="#">
              등록
            </BasicButton>
            <BasicButton className="px-4" size="sm" color="primary" href="#">
              편집
            </BasicButton>
          </div>
        </div>
        <ul className="grid w-full grid-cols-5 gap-5">
          {dressroom.map((item) => (
            <li
              className="group relative block aspect-square shadow-lg"
              key={item._id}
            >
              <div className="absolute inset-0 z-10 flex flex-col justify-end bg-hover-gradient px-5 pb-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="truncate text-b-2-bold">{item.name}</span>
                <span className="mb-3 text-b-3-regular text-gray-200">
                  {item.price}원
                </span>
                <span className="text-b-2-regular text-gray-200">
                  {item.category} &middot; {item.size}
                </span>
              </div>
              <Image
                className="object-contain"
                src={item.image}
                alt={item.name}
                fill
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Page;
