interface TProgressbar {
  max: number;
  step: number;
}
const Progressbar = ({ max, step }: TProgressbar) => {
  const rate = (step / max) * 100;
  const style = {
    bar: `flex h-1.5 w-full overflow-hidden bg-gray-100`,
    progress: `flex flex-col will-change justify-center overflow-hidden whitespace-nowrap bg-black text-center text-xs text-white transition duration-500 ease-in-out w-[${rate}%]`,
  };
  return (
    <div className={`${style.bar}`} role="progressbar">
      <progress className={`sr-only`} max={`${max}`} value={`${step}`} />
      <div className={`${style.progress}`} />
    </div>
  );
};

export default Progressbar;