"use client";
import {
  BasicButton,
  Checkbox,
  ColorButton,
  TagButton,
} from "@/components/atoms";
import { TDressroom } from "@/types/DatabaseTypes";
import Image from "next/image";
import { useState } from "react";
import { useRegistModalStore } from "@/providers/registModal-store-provider";
import { RegistItemModal, UrlInputModal } from "@/components/organism";

const DressroomContent = ({ items }: { items: TDressroom[] }) => {
  // 추후에 모든 상태가 비어있을 때는 모든 상품 렌더링
  // 모든 상태가 비어있지 않을 때는 필터링된 상품 렌더링
  const [seasonState, setSeasonState] = useState<string[]>([]);
  const [categoryState, setCategoryState] = useState<string[]>([]);
  const [colorState, setcolorState] = useState<string[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedItemState, setSelectedItemState] = useState<string[]>([]);
  const { urlModal, setUrlModal } = useRegistModalStore((state) => state);
  const handleRegistButton = () => {
    setUrlModal();
  };
  const selectAllCheckBox = () => {
    const allItemsId = items.map((i) => i._id);
    let isSelectAll = true;

    allItemsId.filter((i) => {
      isSelectAll = !selectedItemState.includes(i) ? false : true;
    });

    if (isSelectAll) {
      setSelectedItemState([]);
    } else {
      setSelectedItemState(allItemsId);
    }
  };
  const checkBoxhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItemState((prev) => {
      if (!prev.includes(e.target.id)) {
        return [e.target.id, ...prev];
      } else {
        return prev.filter((i) => {
          return i !== e.target.id;
        });
      }
    });
  };

  const handleEditMode = () => {
    setEditMode((prev) => !prev);
  };
  const handleSeasonFilter = (season: string) => {
    setSeasonState((prev) => {
      if (prev.includes(season)) {
        return prev.filter((s) => s !== season);
      } else {
        return [...prev, season];
      }
    });
  };
  const handleCategoryFilter = (category: string) => {
    setCategoryState((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  const handleColorFilter = (color: string) => {
    setcolorState((prev) => {
      if (prev.includes(color)) {
        return prev.filter((c) => c !== color);
      } else {
        return [...prev, color];
      }
    });
  };

  const [sort, setSort] = useState<string>(sortOptions[0]);
  const handleSortFilter = (selectedSort: string) => {
    //
    setSort(selectedSort);
  };

  return (
    <>
      <UrlInputModal open={urlModal} />
      <RegistItemModal open={true} />
      <aside className="box-content flex w-[304px] flex-col gap-[64px] pr-[80px]">
        <div className="flex flex-col gap-[18px]">
          {/* Season */}
          <span className="border-b border-gray-400 pb-2 text-b-0-bold">
            Season
          </span>
          <div className="flex flex-wrap gap-2">
            {Object.keys(seasons).map((season) => (
              <TagButton
                type="button"
                key={season}
                color={seasonState.includes(season) ? "primary" : "secondary"}
                onClick={() => handleSeasonFilter(season)}
              >
                {seasons[season]}
              </TagButton>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[18px]">
          {/* Category */}
          <span className="border-b border-gray-400 pb-2 text-b-0-bold">
            Category
          </span>
          <div className="flex flex-wrap gap-2">
            {Object.keys(categories).map((category) => (
              <TagButton
                type="button"
                key={category}
                color={
                  categoryState.includes(category) ? "primary" : "secondary"
                }
                onClick={() => handleCategoryFilter(category)}
              >
                {categories[category]}
              </TagButton>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[18px]">
          {/* Color */}
          <span className="border-b border-gray-400 pb-2 text-b-0-bold">
            Color
          </span>
          <div className="flex flex-wrap gap-2">
            {Object.keys(colorPallet).map((color) => (
              <ColorButton
                key={color}
                color={color}
                active={colorState.includes(color)}
                onClick={() => handleColorFilter(color)}
              />
            ))}
          </div>
        </div>
      </aside>
      <section className="flex w-full flex-col">
        <div className="mb-[38px] flex justify-between">
          {editMode ? (
            <>
              {/* Sort */}
              <div className="flex items-center justify-center gap-2 text-gray-450">
                <div>
                  <span className="text-blue-500">
                    {selectedItemState.length}
                  </span>{" "}
                  / <span>{items.length}</span>개 선택
                </div>
                |
                <button type="button" onClick={selectAllCheckBox}>
                  전체선택
                </button>
              </div>

              <div className="flex gap-3">
                <BasicButton
                  type="submit"
                  form="delete-form"
                  className="px-4"
                  size="sm"
                  color="secondary"
                >
                  삭제
                </BasicButton>
                <BasicButton
                  type="button"
                  onClick={handleEditMode}
                  className="px-4"
                  size="sm"
                  color="primary"
                >
                  완료
                </BasicButton>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-3">
                {sortOptions.map((option) => (
                  <TagButton
                    key={option}
                    type="button"
                    color={sort === option ? "primary" : "secondary"}
                    onClick={() => handleSortFilter(option)}
                  >
                    {option}
                  </TagButton>
                ))}
              </div>
              <div className="flex gap-3">
                <BasicButton
                  className="px-4"
                  size="sm"
                  color="primary"
                  onClick={handleRegistButton}
                >
                  등록
                </BasicButton>
                <BasicButton
                  type="button"
                  onClick={handleEditMode}
                  className="px-4"
                  size="sm"
                  color="primary"
                >
                  편집
                </BasicButton>
              </div>
            </>
          )}
        </div>
        <ul className="grid w-full grid-cols-5 gap-5">
          {items.map((item) => (
            <DressroomItem
              item={item}
              editMode={editMode}
              checked={selectedItemState.includes(item._id)}
              key={item._id}
              onchange={checkBoxhandler}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
export default DressroomContent;
const DressroomItem = ({
  item,
  editMode,
  checked,
  onchange,
}: {
  item: TDressroom;
  editMode: boolean;
  checked: boolean;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <li className="group relative block aspect-square shadow-lg" key={item._id}>
      {editMode ? (
        <form id="delete-form" method="POST">
          <Checkbox
            className="absolute left-2 top-2 z-40"
            label={false}
            type="all"
            name="checkedItem"
            checked={checked}
            id={item._id}
            onchange={onchange}
          >
            {item.name}
          </Checkbox>
        </form>
      ) : null}
      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-hover-gradient px-5 pb-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="truncate text-b-2-bold">{item.name}</span>
        <span className="mb-3 text-b-3-regular text-gray-200">
          {item.price}원
        </span>
        <span className="text-b-2-regular text-gray-200">
          {item.category} &middot; {item.size}
        </span>
      </div>
      <Image className="object-contain" src={item.image} alt={item.name} fill />
    </li>
  );
};
export const colorPallet: { [key: string]: string } = {
  white: "#FFFFFF",
  pink: "#FF89BB",
  red: "#FF685F",
  orange: "#FF9F46",
  yellow: "#FFE03C",
  green: "#74D472",
  blue: "#79CAE4",
  black: "#000000",
  gray: "#818181",
  beige: "#F6E9C9",
  brown: "#8D7360",
  kaki: "#4B734A",
  navy: "#3C72C2",
  purple: "#AA78DD",
};
export const seasons: { [key: string]: string } = {
  "spring-autumn": "봄/가을",
  summer: "여름",
  winter: "겨울",
  "all-season": "사계절",
};
export const categories: { [key: string]: string } = {
  beauty: "뷰티",
  shoes: "신발",
  top: "상의",
  pants: "바지",
  skirt: "원피스/스커트",
  bag: "가방",
  accessory: "패션소품",
  sports: "스포츠/레저",
  life: "디지털/라이프",
  outlet: "아울렛",
  boutique: "부티크",
  kids: "키즈",
  earth: "어스",
};
export const sortOptions = [
  "최신순",
  "업로드순",
  "가나다순",
  "낮은 가격순",
  "높은 가격순",
];
