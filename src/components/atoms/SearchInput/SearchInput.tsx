import { Svg } from "@/components/atoms";
export default function SearchInput() {
  return (
    <div className="relative flex w-[50%] bg-accent-red">
      <input
        type="text"
        placeholder="상품명 또는 #태그명으로 검색하세요"
        className="placholder:text-gray-300 h-[80px] w-full border-b-[7px] border-black text-h-1-regular"
      />
      <div className="absolute bottom-[25%] right-0">
        <Svg id="search" size={50} />
      </div>
    </div>
  );
}
