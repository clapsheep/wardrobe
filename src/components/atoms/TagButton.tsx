import { Svg } from "@/components/atoms";

interface Ttag {
  type?: "button" | "submit";
  color?: "primary" | "secondary";
  disabled?: boolean;
  cancel?: boolean;
  checkBox?: boolean;
  id?: string;
  checked?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}
const TagButton = ({
  type,
  color = "primary",
  disabled,
  cancel,
  checkBox,
  id,
  onClick,
  checked,
  children,
}: Ttag) => {
  const colorStyle = {
    primary: "bg-black text-white",
    secondary: "border border-gray-300 text-gray-800",
    cancel: "bg-gray-100 text-black",
    disabled: "bg-gray-200 text-gray-400",
  };

  if (type) {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`flex h-8 items-center justify-center rounded-[45px] px-3 py-2 text-b-2-regular ${colorStyle[color]} ${!disabled ? colorStyle[color] : colorStyle["disabled"]}}`}
      >
        {children}
      </button>
    );
  } else {
    if (cancel) {
      return (
        <div
          className={`flex h-8 items-center justify-center rounded-[45px] px-3 py-2 text-b-2-regular ${colorStyle["cancel"]}}`}
        >
          {children}
          <button aria-label="tag cancel" className="ml-1" onClick={onClick}>
            <Svg size={12} color="#818181" id="cancel" />
          </button>
        </div>
      );
    } else if (checkBox) {
      return (
        <>
          <input
            type="checkbox"
            className="peer hidden"
            id={id}
            checked={checked}
          />
          <label
            htmlFor={id}
            className={`flex h-8 cursor-pointer items-center justify-center rounded-[45px] px-3 py-2 text-b-2-regular peer-checked:bg-black peer-checked:text-white ${colorStyle[color]}} `}
          >
            {children}
          </label>
        </>
      );
    } else {
      return (
        <div
          className={`flex h-8 items-center justify-center rounded-[45px] px-3 py-2 text-b-2-regular ${colorStyle[color]}}`}
        >
          {children}
        </div>
      );
    }
  }
};
export default TagButton;
