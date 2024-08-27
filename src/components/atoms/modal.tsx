interface Tmodal {
  modalState: boolean;
  className?: string;
  children: React.ReactNode;
}

const Modal = ({ modalState, className, children, ...restProps }: Tmodal) => {
  return (
    <dialog
      open={modalState}
      className={`fixed bottom-0 top-0 z-10 h-[80%] w-[80%] bg-cyan-400 ${className}`}
    >
      {children}
    </dialog>
  );
};
export default Modal;
