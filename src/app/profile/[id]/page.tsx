import React from "react";
import UserProfile from "@/components/molecules/Profile/UserProfile";
import { TUser } from "@/types/DatabaseTypes";
import { notFound } from "next/navigation";
import { getOneUser } from "@/utils/api";

interface UserProfileProps {
  clothesCount: number;
  styleCount: number;
}

const userProfileProps = (user: TUser): TUser & UserProfileProps => ({
  ...user,
  clothesCount: user.dressroom.length,
  styleCount: user.styles.length,
});

interface PageProps {
  params: { id: string };
}

const ProfilePage = async ({ params }: PageProps) => {
  const data: TUser | null = await getOneUser(params.id);

  if (!data) {
    notFound();
  }

  const userProps = userProfileProps(data);

  return (
    <div>
      <UserProfile
        user={userProps}
        clothesCount={data.dressroom.length}
        styleCount={data.styles.length}
        sizeType="large"
      />
    </div>
  );
};

export default ProfilePage;
