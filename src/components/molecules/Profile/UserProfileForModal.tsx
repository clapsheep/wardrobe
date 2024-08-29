import UserImg from "@/components/atoms/Profile/UserImg";
import UserName from "@/components/atoms/Profile/UserName";
import { TUser } from "@/types/DatabaseTypes";
import React from "react";

type Props = {
  user: TUser;
};

const UserProfileForModal = ({ user }: Props) => {
  const { userInfo } = user;

  return (
    <div className="flex gap-[14px] pt-20">
      <UserImg sizeType={"small"} />
      <div className="flex flex-col">
        <UserName user={user} sizeType={"small"} />
        <div className="flex gap-[6px] text-b-2-regular text-gray-450">
          <span>{`${userInfo.height}cm`}</span>
          &middot;
          <span>{`${userInfo.weight}kg`}</span>|
          <span>{`상의 ${userInfo.top}`}</span>
          &middot;
          <span>{`하의 ${userInfo.bottom}`}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileForModal;
