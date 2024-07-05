"use client";
import { FormEvent } from "react";
import { Svg } from "@/components/atoms";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
type TSearchInput = {
  className?: string;
  setList: Dispatch<SetStateAction<string[]>>;
};
export default function SearchInput({ className, setList }: TSearchInput) {
  const router = useRouter();
  const handleSearchLists = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchValue = formData.get("search");

    if (typeof searchValue === "string" && searchValue.trim() !== "") {
      const recentSearchList = localStorage.getItem("searchKeyword");
      let searchList: string[] = [];
      if (recentSearchList) {
        searchList = JSON.parse(recentSearchList);
      }
      if (!searchList.includes(searchValue)) {
        searchList.unshift(searchValue);
        localStorage.setItem("searchKeyword", JSON.stringify(searchList));
        setList(searchList);
        router.push(`/search=${encodeURIComponent(searchValue)}`);
      }
    }
  };

  return (
    <form
      onSubmit={handleSearchLists}
      className={`relative h-[80px] w-[50%] mobile:w-full ${className}`}
    >
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        autoComplete="off"
        name="search"
        placeholder="상품명 또는 #태그명으로 검색하세요"
        className="placholder:text-gray-300 h-[80px] w-full border-b-[7px] border-black bg-transparent text-h-1-regular mobile:border-b-[5px] mobile:text-h-4-regular"
      />
      <button className="absolute bottom-[25%] right-0">
        <Svg id="search" size={50} />
      </button>
    </form>
  );
}
