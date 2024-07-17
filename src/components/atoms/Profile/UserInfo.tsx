import { TUser } from "@/types/DatabaseTypes";
import BasicButton from "@/components/atoms/BasicButton";

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
    <div className={`flex items-center ${style.margin}`}>
      <BasicButton size="md" color="primary" className="me-3 h-7 w-12">
        정보
      </BasicButton>
      <ul className={`flex text-gray-450 ${style.textSize}`}>
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
    </div>
  );
}

export default UserInfo;
