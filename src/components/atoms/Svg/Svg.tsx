interface Svg {
  id?: string;
  color?: "black" | "white";
  size?: number;
  logo?: boolean;
  mobile?: boolean;
}

// import Sprite from "@/assets/sprite.svg";
export default function Svg({
  id,
  color = "black",
  size = 24,
  logo,
  mobile,
}: Svg) {
  if (!logo) {
    return (
      <svg style={{ color }} width={size} height={size}>
        <use href={`sprite.svg#${id}`} />
      </svg>
    );
  } else {
    if (mobile) {
      return (
        <svg style={{ color }}>
          <use href={`logo.svg#mobile-${color}`} />
        </svg>
      );
    } else {
      return (
        <svg style={{ color }}>
          <use href={`logo.svg#web-${color}`} />
        </svg>
      );
    }
  }
}
