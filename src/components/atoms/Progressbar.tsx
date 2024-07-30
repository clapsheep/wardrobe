interface TProgressbar {
  max: number;
  step: number;
}
const Progressbar = ({ max, step }: TProgressbar) => {
  const progressWidth = `${(step / max) * 100}%`;
  const style = {
    bar: `flex h-1 w-full overflow-hidden bg-gray-100 `,
    progress: `flex flex-col justify-center overflow-hidden whitespace-nowrap bg-black text-center text-xs text-white transition-all duration-500 ease-in-out will-change-[width]`,
  };

  return (
    <div className={style.bar} role="progressbar">
      <progress className="sr-only" max={max} value={step} />
      <div className={style.progress} style={{ width: progressWidth }} />
    </div>
  );
};
export default Progressbar;
