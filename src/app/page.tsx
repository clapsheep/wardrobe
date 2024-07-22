import { ResponsiveComponent } from "@/components/atoms";
import {
  MainCarouselDesktop,
  MainCarouselMobile,
} from "@/components/molecules";
import {
  RecommendStyleByItemForDesktop,
  RecommendStyleByItemForMobile,
} from "@/components/organism";
import { TStyle, TUser } from "@/types/DatabaseTypes";

interface Tdata {
  randomStyleList: TStyle[];
  user: TUser;
  recommendStyleFromDressroom: {
    name: string;
    productId: string;
    style: TStyle[];
  }[];
}

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
    <ResponsiveComponent
      desktopContent={
        <MainDeskop
          randomStyleList={randomStyleList}
          recommendStyleFromDressroom={recommendStyleFromDressroom}
          user={user}
        />
      }
      mobileContent={
        <MainMobile
          randomStyleList={randomStyleList}
          recommendStyleFromDressroom={recommendStyleFromDressroom}
          user={user}
        />
      }
    />
  );
}
const MainDeskop = ({
  randomStyleList,
  user,
  recommendStyleFromDressroom,
}: Tdata) => {
  return (
    <main className="mt-16">
      <h2 className="sr-only">프로모션</h2>

      <div className="relative">
        <p className="mx-[85px] text-[70px] font-extralight leading-[135%] tracking-[-0.05em] [word-spacing:15px]">
          TRY{" "}
          <strong className="font-semibold">
            MATCHING <br />
            WITH
          </strong>{" "}
          YOUR WARDROBE
        </p>
        <MainCarouselDesktop list={randomStyleList}></MainCarouselDesktop>
      </div>

      <section className="mx-[85px] mt-[164px] flex flex-col">
        <h2 className="sr-only">코디 추천</h2>
        <p className="text-h-4-semibold">
          <span className="text-accent-blue">{user.username}</span>님의
          Dressroom
        </p>
        <p className="mb-12 text-h-2-bold">
          다른 사람들은 어떻게 코디했을까요?
        </p>
        <ul className="">
          <RecommendStyleByItemForDesktop data={recommendStyleFromDressroom} />
        </ul>
      </section>
    </main>
  );
};
const MainMobile = ({
  randomStyleList,
  user,
  recommendStyleFromDressroom,
}: Tdata) => {
  return (
    <main className="mt-4">
      <h2 className="sr-only">프로모션</h2>
      <div className="relative">
        <p className="absolute bottom-0 z-10 px-4 text-[40px] font-extralight leading-[135%] tracking-[-0.05em] text-white drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.5)] [word-spacing:10px]">
          TRY{" "}
          <strong className="font-semibold">
            MATCHING <br />
            WITH
          </strong>{" "}
          YOUR WARDROBE
        </p>
        <MainCarouselMobile list={randomStyleList}></MainCarouselMobile>
      </div>

      <section className="mx-5 mt-[53px] flex flex-col">
        <h2 className="sr-only">코디 추천</h2>
        <p className="text-h-5-semibold">
          <span className="text-accent-blue">{user.username}</span>님의
          Dressroom
        </p>
        <p className="mb-12 text-h-4-bold">
          다른 사람들은 어떻게 코디했을까요?
        </p>
        <ul>
          <RecommendStyleByItemForMobile data={recommendStyleFromDressroom} />
        </ul>
      </section>
    </main>
  );
};
