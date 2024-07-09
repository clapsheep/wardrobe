import { MainCarousel } from "@/components/molecules";

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
      </section>
    </>
  );
}
