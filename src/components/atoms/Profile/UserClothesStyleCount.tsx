interface UserClothesStyleCountProps {
  clothesCount: number;
  styleCount: number;
}

export default function UserClothesStyleCount({
  clothesCount,
  styleCount,
}: UserClothesStyleCountProps) {
  const style = {
    title: "text-h-4-regular",
    count: "text-h-4-semibold ms-[10px]",
  };
  return (
    <ul className="flex gap-14">
      <li className={style.title}>
        옷<span className={style.count}>{clothesCount}</span>
      </li>
      <li className={style.title}>
        스타일<span className={style.count}>{styleCount}</span>
      </li>
    </ul>
  );
}
