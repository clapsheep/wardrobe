import Svg from "./Svg";

interface TFloatingButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FloatingButton = ({ onClick }: TFloatingButton) => {
  return (
    <button
      onClick={onClick}
      aria-label="등록버튼"
      className="fixed bottom-[60px] right-[40px] hover:scale-105"
      type="button"
    >
      <Svg size={60} id="add" />
    </button>
  );
};

export default FloatingButton;
