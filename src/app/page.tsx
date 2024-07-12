import { MainCarousel } from "@/components/molecules";
import { RecommendStyleByItem } from "@/components/organism";

export default async function Home() {
  const { MONGO_API } = process.env;

  // 추후 로그인 기능 구현 시 JWT 토근에서 userId 받아오기
  const userId = "667c2764df7a458908b4b54b";

  const res = await Promise.all([
    fetch(`${MONGO_API}/style`, { cache: "no-store" }),
    fetch(`${MONGO_API}/user/${userId}/style/recommend`, { cache: "no-store" }),
    fetch(`${MONGO_API}/user/${userId}`, { cache: "no-store" }),
  ]);
  const [randomStyleList, recommendStyleFromDressroom, user] =
    await Promise.all(res.map((i) => i.json()));

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
        <MainCarousel list={randomStyleList} />
        <section className="mx-[85px] mt-[164px] flex flex-col">
          <h1 className="sr-only">코디 추천</h1>
          <p className="text-h-3-semibold">
            <span className="text-accent-blue">{user.username}</span>님의
            Dressroom
          </p>
          <p className="mb-12 text-h-1-bold">
            다른 사람들은 어떻게 코디했을까요?
          </p>
          <ul>
            <RecommendStyleByItem data={recommendStyleFromDressroom} />
          </ul>
        </section>
      </section>
    </>
  );
}
