import { Svg } from "@/components/atoms";
type TSearchInput = {
  className?: string;
};
export default function SearchInput({ className }: TSearchInput) {
  return (
    <div className={`relative h-[80px] w-[50%] ${className}`}>
      <input
        type="text"
        placeholder="상품명 또는 #태그명으로 검색하세요"
        className="placholder:text-gray-300 h-[80px] w-full border-b-[7px] border-black bg-transparent text-h-1-regular"
      />
      <div className="absolute bottom-[25%] right-0">
        <Svg id="search" size={50} />
      </div>
    </div>
  );
}
