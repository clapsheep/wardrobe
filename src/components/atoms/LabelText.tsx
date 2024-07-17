interface LabelTextProps {
  type: "info" | "purchase";
  customStyle?: string;
}

export default function LabelText({ type, customStyle = "" }: LabelTextProps) {
  const text = type === "info" ? "정보" : "구매처";
  const style =
    type === "info" ? "px-2 text-b-0-regular" : "px-3 py-0.5 text-b-4-semibold";
  return (
    <span className={`bg-gray-700 text-gray-100 ${style} ${customStyle}`}>
      {text}
    </span>
  );
}
