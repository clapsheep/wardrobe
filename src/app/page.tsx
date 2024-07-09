import { MainCarousel } from "@/components/molecules";
import { RecommendStyleByItem } from "@/components/organism";

const { MONGO_API } = process.env;

export default async function Home() {
  const res = await fetch(`${MONGO_API}/style`);
  const { list } = await res.json();

  return (
    <>
      <section className="mt-16">
        <h1 className="sr-only">프로모션</h1>
        <p className="mx-[85px] text-[80px] font-extralight leading-[135%] tracking-[-0.05em] [word-spacing:30px]">
          TRY{" "}
          <strong className="font-semibold">
            MATCHING <br />
            WITH
          </strong>{" "}
          YOUR WARDROBE
        </p>
        <MainCarousel list={list} />
        <h1 className="sr-only">코디 추천</h1>
        <section className="flex flex-col">
          <p className="text-h-3-semibold">
            <span className="text-accent-blue">clapsheep</span>님의 Dressroom
          </p>
          <p className="text-h-1-bold">다른 사람들은 어떻게 코디했을까요?</p>
          <RecommendStyleByItem />
        </section>
      </section>
    </>
  );
}
