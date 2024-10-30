"use client";
import { useState, useEffect } from "react";
import { SearchInput, Svg } from "@/components/atoms";
import { RecentSearchKeyword } from "@/components/molecules";

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
    <dialog
      className={`bg-none fixed inset-0 z-10 flex h-full w-full flex-col items-end bg-opacity-50 p-[82px] font-sans mobile:p-10 ${className}`}
      open={open}
    >
      <button onClick={closeFn} className="pb-[53px] mobile:hidden">
        <Svg id="cancel" size={48} color={"A0A0A0"} />
      </button>
      <button onClick={closeFn} className="hidden pb-[53px] mobile:block">
        <Svg id="cancel" size={28} color={"A0A0A0"} />
      </button>
      <div className="min-w-[50%] mobile:w-full">
        <SearchInput setList={setRecentSearchList} />
        <RecentSearchKeyword
          strageFn={handleStorage}
          recentSearchList={recentSearchList}
        />
      </div>
    </dialog>
  );
}
