const Modal = ({
  modalState,
  children,
  ...restProps
}: {
  modalState: boolean;
  children: React.ReactNode;
}) => {
  return (
    <dialog
      open={modalState}
      className="fixed bottom-0 top-0 z-10 h-[80%] w-[80%] bg-cyan-400"
    >
      {children}
    </dialog>
  );
};
export default Modal;
