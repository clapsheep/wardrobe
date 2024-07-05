"use client";
import { SearchInput, Svg } from "@/components/atoms";
import { useState, useEffect } from "react";
function RecentSearchKeyword() {
  const [recentSearchList, setRecentSearchList] = useState<string[]>([]);
  // 전체, 아이템 삭제 함수
  const handleStorage = {
    allClear: () => {
      localStorage.removeItem("searchKeyword");
      setRecentSearchList([]);
    },
    itemClear: (keyword: string) => {
      const updatedList = recentSearchList.filter((item) => item !== keyword);
      setRecentSearchList(updatedList);
      localStorage.setItem("searchKeyword", JSON.stringify(updatedList));
    },
  };
  useEffect(() => {
    try {
      const searchLists = localStorage.getItem("searchKeyword");
      if (searchLists) setRecentSearchList(JSON.parse(searchLists));
    } catch {
      setRecentSearchList([]);
    }
  }, []);

  return (
    <>
      <SearchInput setList={setRecentSearchList} />
      <div className="flex w-[50%] flex-col gap-[24px] py-3 mobile:w-full">
        <div className="flex justify-between">
          <h2 className="text-h-1-semibold mobile:text-h-3-semibold">
            최근 검색어
          </h2>
          <button
            onClick={handleStorage.allClear}
            className="text-h-4-semibold text-gray-400 mobile:text-h-5-semibold"
          >
            전체 삭제
          </button>
        </div>
        <ul className="flex flex-col gap-[24px] text-h-4-regular text-gray-600 mobile:text-h-5-regular">
          {recentSearchList?.map((keyword) => (
            <li className="flex justify-between" key={keyword}>
              {keyword}
              <button onClick={() => handleStorage["itemClear"](keyword)}>
                <Svg id="cancel" size={24} color={"A0A0A0"} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

interface TSearchModal {
  className?: string;
  open: boolean;
  closeFn: () => void;
}

export default function SearchModal({
  closeFn,
  className,
  open,
}: TSearchModal) {
  return (
    <dialog
      className={`bg-none fixed inset-0 z-10 flex h-svh w-full flex-col items-end bg-opacity-50 p-[82px] font-sans mobile:p-4 ${className}`}
      open={open}
    >
      <button onClick={closeFn} className="pb-[53px]">
        <Svg id="cancel" size={48} color={"A0A0A0"} />
      </button>
      <RecentSearchKeyword />
    </dialog>
  );
}
