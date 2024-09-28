import { colorPallet } from "@/components/organism/DressroomContent";
interface Props {
  color: string;
  active: boolean;
  onClick: (color: string) => void;
}

const ColorButton = ({ color, active, onClick: onChange }: Props) => {
  return (
    <button
      aria-label={`${color} 색상 선택`}
      type="button"
      className={`inline-block h-6 w-6 cursor-pointer ${active ? "scale-110" : color !== "white" ? "brightness-75" : ""} ${color === "white" ? "border border-gray-300" : ""}`}
      style={{ backgroundColor: colorPallet[color] }}
      onClick={() => onChange(color)}
    ></button>
  );
};

export default ColorButton;
