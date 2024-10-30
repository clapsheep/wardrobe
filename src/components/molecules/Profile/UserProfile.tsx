import React from "react";
import UserClothesStyleCount from "@/components/atoms/Profile/UserClothesStyleCount";
import UserName from "@/components/atoms/Profile/UserName";
import UserImg from "@/components/atoms/Profile/UserImg";
import UserInfo from "@/components/atoms/Profile/UserInfo";
import { TUser } from "@/types/DatabaseTypes";

interface UserProfileProps {
  user: TUser;
  clothesCount: number;
  styleCount: number;
  sizeType: "large" | "small";
}

function UserProfile({
  user,
  clothesCount,
  styleCount,
  sizeType,
}: UserProfileProps) {
  const style = {
    flex: sizeType === "large" ? "items-center gap-20" : "gap-[14px]",
  };

  return (
    <div className={`flex ${style.flex}`}>
      <UserImg sizeType={sizeType} />
      <div>
        <UserName user={user} sizeType={sizeType} />
        <UserInfo user={user} sizeType={sizeType} />
        {sizeType === "large" ? (
          <UserClothesStyleCount
            clothesCount={clothesCount}
            styleCount={styleCount}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UserProfile;
