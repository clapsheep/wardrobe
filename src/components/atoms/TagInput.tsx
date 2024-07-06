interface Ttag {
  id: string;
  name: string;
  type: "radio" | "checkbox";
  children: React.ReactNode;
}
const TagInput = ({ id, name, type, children }: Ttag) => {
  if (type === "checkbox") {
    return (
      <div>
        <input
          className="peer sr-only"
          id={id}
          name={name}
          value={id}
          type="checkbox"
        />
        <label
          htmlFor={id}
          className={`flex h-8 items-center justify-center rounded-[45px] border border-gray-300 px-3 py-2 text-b-2-regular text-gray-800 peer-checked:bg-black peer-checked:text-white`}
        >
          {children}
        </label>
      </div>
    );
  }
  if (type === "radio") {
    return (
      <div>
        <input
          className="peer sr-only"
          id={id}
          name={name}
          value={id}
          type="radio"
        />
        <label
          htmlFor={id}
          className={`flex h-8 items-center justify-center rounded-[45px] border border-gray-300 px-3 py-2 text-b-2-regular text-gray-800 peer-checked:bg-black peer-checked:text-white`}
        >
          {children}
        </label>
      </div>
    );
  }
};
export default TagInput;
