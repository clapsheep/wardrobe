import UserImg from "@/components/atoms/Profile/UserImg";
import UserName from "@/components/atoms/Profile/UserName";
import { TUser } from "@/types/DatabaseTypes";
import React from "react";

type Props = {
  user: TUser;
};

const UserProfileForModal = ({ user }: Props) => {
  return (
    <div className="flex items-center gap-[14px]">
      <UserImg sizeType={"small"} />
      <div>
        <UserName user={user} sizeType={"small"} />
      </div>
    </div>
  );
};

export default UserProfileForModal;
