import { TUser } from "@/types/DatabaseTypes";

interface UserIdProps {
  user: TUser;
  sizeType: "large" | "small";
}

export default function UserName({ user, sizeType }: UserIdProps) {
  const style = {
    textSize: sizeType === "large" ? "text-h-3-regular" : "text-b-0-semibold",
  };

  return (
    <div className={`${style.textSize} text-gray-800`}>{user.username}</div>
  );
}
