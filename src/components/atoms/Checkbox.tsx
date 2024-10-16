import { Svg } from "@/components/atoms";

interface TCheckbox {
  id: string;
  children: string;
  label?: boolean;
  name: string;
  type: "all" | "seperate";
  className?: string;
  checked: boolean;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
  id,
  label = true,
  checked,
  children,
  type,
  name,
  className,
  onchange,
  ...rest
}: TCheckbox) => {
  const typeStyle = {
    all: "before:rounded-sm before:border before:border-gray-500 peer-checked:before:bg-accent-blue ",
    seperate: "peer-checked:before:text-b-2-semibold",
  };

  return (
    <>
      <input
        id={id}
        className={`peer hidden`}
        name={name}
        type="checkbox"
        aria-describedby={`${children} 체크`}
        aria-label={label ? "" : `${children} 체크`}
        onChange={onchange}
        checked={checked}
      />

      <label
        htmlFor={id}
        tabIndex={1}
        className={`relative flex cursor-pointer ${className}`}
      >
        {checked ? (
          <Svg id="checked" size={32} />
        ) : (
          <Svg id="nonChecked" size={32} />
        )}
        {/* <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute left-1 top-[30%] text-gray-500 peer-checked:${type === "all" ? "text-white" : "text-blue-700"}`}
        >
          <path
            d="M0.5 4L4.5 8L11.5 0.5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg> */}

        <span
          className={`point-cursor flex items-center text-b-2-regular peer-checked:text-b-2-semibold peer-checked:after:sr-only peer-checked:after:content-['선택됨'] ${typeStyle[`${type}`]}`}
        >
          {label ? children : null}
        </span>
      </label>
    </>
  );
};

export default Checkbox;
