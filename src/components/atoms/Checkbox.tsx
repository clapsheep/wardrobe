interface TCheckbox {
  id: string;
  children: string;
  type: "all" | "seperate";
  className?: string;
}

const Checkbox = ({ id, children, type, className, ...rest }: TCheckbox) => {
  const typeStyle = {
    all: "before:rounded-sm before:border before:border-gray-500 peer-checked:before:bg-accent-blue ",
    seperate: "peer-checked:before:text-b-2-semibold",
  };
  return (
    <label
      htmlFor={id}
      tabIndex={1}
      className={`relative flex cursor-pointer ${className}`}
    >
      <input
        id={id}
        className={`peer appearance-none`}
        type="checkbox"
        aria-describedby={`${children} 체크`}
        {...rest}
      />
      <svg
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
      </svg>
      <span
        className={`point-cursor before:content[' '] flex select-none items-center text-b-2-regular before:mr-2 before:inline-block before:h-5 before:w-5 peer-checked:text-b-2-semibold peer-checked:after:sr-only peer-checked:after:content-['선택됨'] ${typeStyle[`${type}`]}`}
      >
        {children}
      </span>
    </label>
  );
};

export default Checkbox;
