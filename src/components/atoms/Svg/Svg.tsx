interface Svg {
  id: string;
  color?: string;
  size?: number;
}

// import Sprite from "@/assets/sprite.svg";
export default function Svg({ id, color, size = 24 }: Svg) {
  return (
    <svg style={{ color }} width={size} height={size}>
      <use href={`sprite.svg#${id}`} />
    </svg>
  );
}
