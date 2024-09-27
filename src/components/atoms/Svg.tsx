interface SVGProps {
  id: string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  [key: string]: any;
}

// import Sprite from "@/assets/sprite.svg";
// export default function Svg({ id, color, size = 24 }: Svg) {
//   return (
//     <svg style={{ color }} width={size} height={size}>
//       <use href={`sprite.svg#${id}`} />
//     </svg>
//   );
// }
export default function Svg({
  id,
  size = 28,
  width,
  height,
  color = "#000",
  ...restProps
}: SVGProps) {
  const iconStyles = { width: width ?? size, height: height ?? size, color };
  const hasLogo = id.includes("logo");
  const hasMobile = id.includes("mobile");
  if (hasLogo) {
    if (hasMobile) {
      return (
        <svg width={127} height={24}>
          <use href={`/svg/_sprite.svg#logo-mobile_Black`} />
        </svg>
      );
    }
    return (
      <svg width={255} height={60}>
        <use href={`/svg/_sprite.svg#logo-web_Black`} />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 28"
      style={iconStyles}
      {...restProps}
    >
      <use href={`/svg/_sprite.svg#${id}`} />
    </svg>
  );
}
