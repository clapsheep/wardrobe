import { TUser } from "@/types/DatabaseTypes";

interface UserInfoProps {
  user: TUser;
  sizeType: "large" | "small";
}

function UserInfo({ user, sizeType }: UserInfoProps) {
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
      <li>{user.userInfo.height}cm</li>
      <li className="mx-2" aria-hidden="true">
        ・
      </li>
      <li>{user.userInfo.weight}kg</li>
      <li
        className="mx-2 h-4 w-[1px] self-center bg-gray-300"
        aria-hidden="true"
      ></li>
      <li>상의 {user.userInfo.top}</li>
      <li className="mx-2" aria-hidden="true">
        ・
      </li>
      <li>하의 {user.userInfo.bottom}</li>
    </ul>
  );
}

export default UserInfo;
