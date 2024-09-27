import { TStyle } from "@/types/DatabaseTypes";
import { Svg } from "@/components/atoms";
import Link from "next/link";
import "swiper/css";
import { StyleCard } from "../molecules/StyleCard";

const RecommendStyleByItemForDesktop = ({
  data,
}: {
  data: { name: string; productId: string; style: TStyle[] }[];
}) => {
  return data.map((item) => {
    return (
      <li key={item.name} className="tablet:pb-10 pb-[138px]">
        <p className="flex w-full items-center justify-between border-b-2 pb-2">
          <span className="tablet:text-b-1-regular overflow-hidden text-ellipsis whitespace-nowrap text-h-5-regular text-gray-450">
            {item.name}
          </span>
          <Link
            className="tablet:text-b-2-regular ml-2 flex items-center whitespace-nowrap"
            href={`/style/${item.productId}`}
          >
            SEARCH ALL
            <Svg id="arrow-up-right" size={28} />
          </Link>
        </p>
        {/* <ul className="mt-6 flex justify-start gap-4 mobile:gap-2"> */}
        <ul className="tablet:grid-cols-3 tablet:gap-2 mt-6 grid grid-flow-col grid-cols-6 gap-4">
          {item.style.map((style) => {
            return <StyleCard key={style._id} style={style} />;
          })}
        </ul>
      </li>
    );
  });
};

export default RecommendStyleByItemForDesktop;
