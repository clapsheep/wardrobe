"use client";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
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
  isSearchState: boolean;
  handleSearchState: Dispatch<SetStateAction<boolean>>;
}

export default function MobileHamburger({
  closeFn,
  isSearchState,
  handleSearchState,
}: TMobileHamburger) {
  //로그인 상태 확인 (수정필)
  const isLogin = true;
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
    <dialog className="fixed inset-0 z-10 flex h-full w-full flex-col gap-[106px] bg-gray-900 px-[20px] font-sans">
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
        <li className="hover:text-b-0-bold hover:text-white hover:underline hover:decoration-white">
          {isLogin ? (
            <button>Logout</button>
          ) : (
            <Link href={"/bookmark"}>Login</Link>
          )}
        </li>
        <li className="hover:text-b-0-bold hover:text-white hover:underline hover:decoration-white">
          <Link href={"/bookmark"}>Bookmark</Link>
        </li>
        <li className="hover:text-b-0-bold hover:text-white hover:underline hover:decoration-white">
          <button onClick={() => handleSearchState(true)}>Search</button>
        </li>
      </ul>
    </dialog>
  );
}
