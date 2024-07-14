interface UserInfoProps {
  height: number;
  weight: number;
  // topSize: number;
  // bottomSize: number;

  sizeType: "large" | "small";
}

function UserInfo({ height, weight, sizeType }: UserInfoProps) {
  const style = {
    textSize: sizeType === "large" ? "text-b-0-regular" : "text-b-2-regular",
    margin: sizeType === "large" ? "mt-4 mb-9" : "mt-[2px]",
    hidden: sizeType === "large" ? "" : "hidden",
  };

  return (
    <ul className={`flex text-gray-450 ${style.textSize} ${style.margin}`}>
      <li
        className={`me-3 bg-gray-700 px-2 text-b-0-semibold text-white ${style.hidden}`}
      >
        정보
      </li>
      <li>{height}cm</li>
      <li className="mx-2" aria-hidden="true">
        ・
      </li>
      <li>{weight}kg</li>
      {/* <li className="mx-2 bg-gray-300 w-[1px] h-4 self-center" aria-hidden="true"></li>
      <li>상의 {topSize}</li>
      <li className="mx-2" aria-hidden="true">・</li>
      <li>하의 {bottomSize}</li> */}
    </ul>
  );
}

export default UserInfo;
