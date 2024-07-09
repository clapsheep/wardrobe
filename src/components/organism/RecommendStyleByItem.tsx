import Link from "next/link";
import { Svg } from "../atoms";

const RecommendStyleByItem = () => {
  return (
    <div>
      <p className="m-4 flex w-full justify-between border-b-2 pb-[18px]">
        <span className="text-h-3-regular text-gray-450">아이템명</span>
        <Link className="flex text-b-0-regular" href="/">
          SEARCH ALL
          <Svg id="arrow-up-right" size={28} />
        </Link>
      </p>
    </div>
  );
};
export default RecommendStyleByItem;
