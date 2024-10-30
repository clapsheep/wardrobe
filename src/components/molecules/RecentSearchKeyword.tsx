"use client";
import { Svg } from "@/components/atoms";

interface TRecentSearchKeyword {
  strageFn: { allClear: () => void; itemClear: (keyword: string) => void };
  recentSearchList: string[];
}
export default function RecentSearchKeyword({
  strageFn,
  recentSearchList,
}: TRecentSearchKeyword) {
  return (
    <>
      <div className="flex w-full flex-col gap-[24px] py-3">
        <div className="flex justify-between">
          <h2 className="text-h-1-semibold mobile:text-h-3-semibold">
            최근 검색어
          </h2>
          <button
            onClick={strageFn.allClear}
            className="text-h-4-semibold text-gray-400 mobile:text-h-5-semibold"
          >
            전체 삭제
          </button>
        </div>
        <ul className="flex flex-col gap-[24px] text-h-4-regular text-gray-600 mobile:text-h-5-regular">
          {recentSearchList?.map((keyword: string) => (
            <li className="flex justify-between" key={keyword}>
              {keyword}
              <button onClick={() => strageFn["itemClear"](keyword)}>
                <Svg id="cancel" size={24} color={"A0A0A0"} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
