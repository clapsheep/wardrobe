"use client";
import Link from "next/link";
import { Svg } from "@/components/atoms";
import { usePathname } from "next/navigation";

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

interface TMobileHamburger {
  closeFn: () => void;
}

export default function MobileHamburger({ closeFn }: TMobileHamburger) {
  const pathname = usePathname();
  //사용은 안 하지만 , 페이지 작업이 됐을때 확인 후 유지할지 결정
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === pathname) {
      e.preventDefault();
      closeFn();
    }
    closeFn();
  };
  return (
    <div className="flex h-svh flex-col gap-[106px] bg-gray-900 p-[20px] font-sans">
      <div className="flex justify-between">
        <Svg id="logo-mobile_white" />
        <button onClick={closeFn}>
          <Svg id="cancel" color="#FFFFFF" />
        </button>
      </div>
      <nav>
        <ul className="flex flex-col gap-[64px] text-h-3-regular text-gray-200">
          {sitemap["main"]().map(({ text, href }) => (
            <li key={text}>
              <Link
                className="flex justify-between hover:text-h-3-semibold hover:underline hover:decoration-white"
                href={href}
                onClick={closeFn}
              >
                {text}
                <Svg id="arrow-right" color="#FFFFFF" />
              </Link>
            </li>
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