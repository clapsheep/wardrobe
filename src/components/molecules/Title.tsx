import { BasicInput, ModalCloseBtn, Svg } from "../atoms";
interface TTitle {
  onClick?: () => void;
  children: React.ReactNode;
}
const Title = ({ onClick, children }: TTitle) => {
  return (
    <div className="">
      <div className="flex items-center border-b-4 border-black">
        <h3 className="pb-2 text-h-5-bold">{children}</h3>
        <ModalCloseBtn onClick={onClick} />
      </div>
      <form action="" className="mt-4">
        <BasicInput label="상품명" id="name" placeholder="상품명" type="text" />
        <BasicInput label="가격" id="가격" placeholder="가격" type="text" />
      </form>
    </div>
  );
};
export default Title;
