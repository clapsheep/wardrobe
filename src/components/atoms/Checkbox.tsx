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
    <label htmlFor={id} className={`relative flex ${className}`}>
      <input
        id={id}
        className={`peer appearance-none`}
        type="checkbox"
        {...rest}
      />
      <svg
        width="12"
        height="9"
        viewBox="0 0 12 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute left-1 top-[30%] text-gray-500 peer-checked:${type == "all" ? "text-white" : "text-accent-blue"}`}
      >
        <path
          d="M0.5 4L4.5 8L11.5 0.5"
          stroke="currentColor"
          stroke-width="1.3"
        />
      </svg>
      <span
        className={`point-cursor before:content[' '] flex items-center text-b-2-regular before:mr-2 before:inline-block before:h-5 before:w-5 peer-checked:text-b-2-semibold ${typeStyle[`${type}`]}`}
      >
        {children}
      </span>
    </label>
  );
};

export default Checkbox;
