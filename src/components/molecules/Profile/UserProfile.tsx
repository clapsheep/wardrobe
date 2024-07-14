import React from "react";
import UserClothesStyleCount from "@/components/atoms/Profile/UserClothesStyleCount";
import UserId from "@/components/atoms/Profile/UserId";
import UserImg from "@/components/atoms/Profile/UserImg";
import UserInfo from "@/components/atoms/Profile/UserInfo";
import { TUser } from "@/types/DatabaseTypes";

interface UserProfileProps {
  userId: string;
  clothesCount: number;
  styleCount: number;
}

interface UserProps {
  user: TUser & UserProfileProps;
  sizeType: "large" | "small";
}

function UserProfile({ user, sizeType }: UserProps) {
  const style = {
    flex: sizeType === "large" ? "items-center gap-24" : "gap-[14px]",
  };

  return (
    <div className={`flex ${style.flex}`}>
      <UserImg sizeType={sizeType} />
      <div>
        <UserId userId={user.userId} sizeType={sizeType} />
        <div>test</div>
        <UserInfo
          height={user.userInfo.height}
          weight={user.userInfo.weight}
          // topSize={user.topSize}
          // bottomSize={user.bottomSize}
          sizeType={sizeType}
        />
        {sizeType === "large" ? (
          <UserClothesStyleCount
            clothesCount={user.clothesCount}
            styleCount={user.styleCount}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UserProfile;
