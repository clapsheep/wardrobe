import { TStyle } from "@/types/DatabaseTypes";
import Image from "next/image";
import Link from "next/link";
import { Svg } from "../atoms";

const RecommendStyleByItem = async ({
  data,
}: {
  data: { name: string; style: TStyle[] }[];
}) => {
  return data.map((item) => {
    return (
      <div key={item.name} className="pb-[138px]">
        <p className="flex w-full justify-between border-b-2 p-4 pb-[18px]">
          <span className="text-h-3-regular text-gray-450">{item.name}</span>
          <Link className="flex text-b-0-regular" href="/">
            SEARCH ALL
            <Svg id="arrow-up-right" size={28} />
          </Link>
        </p>
        <div className="mt-6 flex h-[264px] w-full justify-center gap-[35px]">
          {item.style.map((style) => {
            console.log(style);
            return (
              <figure className="relative h-[264px] w-[220px]" key={style._id}>
                <Image
                  className="object-cover"
                  // width={220}
                  // height={264}
                  fill
                  src={style.image}
                  alt=""
                />
                <figcaption className="sr-only">
                  {style.hashtag.join()}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    );
  });
};
export default RecommendStyleByItem;
