import Link from "next/link";
import { Svg } from "@/components/atoms";

interface MenuType {
  href: string;
  text: string;
}
const sitemap = {
  main: () => {
    return [
      { text: "Home", href: "/" },
      { text: "Dressroom", href: "/dressroom" },
      { text: "Style", href: "/style" },
      { text: "Profile", href: "/profile" },
    ];
  },
  sub: () => {
    const isLogin = true;
    return [
      { text: "Bookmark", href: "/bookmark" },
      { text: "Search", href: "/" },
      isLogin
        ? { text: "logout", href: "/logout" }
        : { text: "login", href: "/login" },
    ];
  },
};

function MobileSiteMapItem({ text, href }: MenuType) {
  return (
    <li>
      <Link
        className="flex justify-between hover:text-h-3-semibold hover:underline hover:decoration-white"
        href={href}
      >
        {text}
        <Svg id="arrow-right" color="white" size={28} />
      </Link>
    </li>
  );
}
interface TMobileHamburger {
  closeFn: () => void;
}

export default function MobileHamburger({ closeFn }: TMobileHamburger) {
  return (
    <div className="flex h-svh flex-col gap-[106px] bg-gray-900 p-[20px] font-sans">
      <div className="flex justify-between">
        <Svg logo mobile color="white" size={127} />
        <button onClick={closeFn}>
          <Svg id="cancel" color="white" size={28} />
        </button>
      </div>
      <nav>
        <ul className="flex flex-col gap-[64px] text-h-3-regular text-gray-200">
          {sitemap["main"]().map(({ text, href }) => (
            <MobileSiteMapItem key={text} text={text} href={href} />
          ))}
        </ul>
      </nav>
      <ul className="mt-auto flex justify-between text-b-0-semibold text-gray-300">
        {sitemap["sub"]().map(({ text, href }) => (
          <li
            className="hover:text-b-0-bold hover:text-white hover:underline hover:decoration-white"
            key={text}
          >
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
