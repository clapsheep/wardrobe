interface UserIdProps {
  userId: string;
  sizeType: "large" | "small";
}

export default function UserId({ userId, sizeType }: UserIdProps) {
  const style = {
    textSize: sizeType === "large" ? "text-h-3-regular" : "text-b-0-semibold",
  };

  return <div className={`${style.textSize} text-gray-800`}>{userId}</div>;
}
