import { TStyle } from "@/types/DatabaseTypes";
import { Svg } from "@/components/atoms";
import Image from "next/image";
import Link from "next/link";

const RecommendStyleByItem = async ({
  data,
}: {
  data: { name: string; productId: string; style: TStyle[] }[];
}) => {
  return data.map((item) => {
    return (
      <li key={item.name} className="pb-[138px]">
        <p className="flex w-full justify-between border-b-2 p-4 pb-[18px]">
          <span className="text-h-3-regular text-gray-450">{item.name}</span>
          <Link
            className="flex text-b-0-regular"
            href={`/style/${item.productId}`}
          >
            SEARCH ALL
            <Svg id="arrow-up-right" size={28} />
          </Link>
        </p>
        <ul className="mt-6 flex h-[264px] w-full gap-[35px]">
          {item.style.map((style) => {
            return (
              <li key={style._id}>
                <figure className="relative h-[264px] w-[220px]">
                  <Image
                    className="object-cover"
                    fill
                    src={style.image}
                    alt=""
                  />
                  <figcaption className="sr-only">
                    {style.hashtag.join()}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </li>
    );
  });
};
export default RecommendStyleByItem;
