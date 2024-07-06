"use client";
import Link from "next/link";
import { Svg } from "@/components/atoms";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MobileHamburger, SearchModal } from "@/components/molecules";

type THeader = {
  isScrolled: boolean;
};

const userMenuItems = () => {
  // 로그인여부 전역상태관리 지정후 수정 필요
  const isLogin = false;
  return [
    { href: "/profile", iconId: "person", text: "Profile" },
    { href: "/bookmark", iconId: "bookmark", text: "Bookmark" },
    isLogin
      ? { href: "/logout", iconId: "log-out", text: "Logout" }
      : { href: "/login", iconId: "log-in", text: "Login" },
  ];
};

const navItems = [
  { href: "/dressroom", text: "Dressroom" },
  { href: "/style", text: "Style" },
];

function MobileHeader() {
  const [activeBurger, setActiveBurger] = useState<boolean>(false);
  return activeBurger ? (
    <MobileHamburger closeFn={() => setActiveBurger(false)} />
  ) : (
    <header className={`flex w-full justify-between`}>
      <Svg logo mobile size={127} />
      <button onClick={() => setActiveBurger(true)}>
        <Svg id="burger" />
      </button>
    </header>
  );
}

function DesktopHeader({ isScrolled }: THeader) {
  const pathname = usePathname();
  const [isSearchState, setIsSearchState] = useState<boolean>(false);
  return (
    <header
      className={`w-full px-[83px] font-sans ${
        isScrolled ? "mt-[73px]" : "pt-[52px]"
      }`}
    >
      {!isScrolled && (
        <ul className="font-gray-800 flex justify-end gap-4 text-center text-b-0-regular">
          {userMenuItems().map((item) => (
            <li key={item.iconId}>
              <Link href={item.href} className={`flex items-center gap-1`}>
                <Svg id={item.iconId} size={18} />
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <nav>
        <ul className="flex grid grid-cols-7 grid-rows-1 items-center text-h-2-bold">
          <div className="col-span-2 col-start-1 flex gap-[42px]">
            {navItems.map((item) => (
              <li
                className={`${pathname === `${item.href}` ? "underline decoration-8 underline-offset-8" : ""}`}
                key={item.text}
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </div>
          <li className="col-span-1 col-start-4 mx-auto max-w-full">
            <Link className="w-[265px] max-w-full" href="/">
              <Svg mobile logo size={265} />
            </Link>
          </li>
          <ul
            className={`${
              isScrolled
                ? "col-span-2 col-start-6 flex gap-[34px] justify-self-center"
                : "hidden"
            }`}
          >
            {userMenuItems().map((item) => (
              <li key={item.iconId}>
                <Link href={item.href}>
                  <Svg id={item.iconId} size={28} />
                </Link>
              </li>
            ))}
          </ul>
          <li className="col-start-8 justify-self-end">
            <button onClick={() => setIsSearchState(true)}>
              <Svg id="search" size={isScrolled ? 28 : 38} color="black" />
            </button>
          </li>
        </ul>
      </nav>
      {isSearchState ? (
        <SearchModal
          closeFn={() => setIsSearchState(false)}
          open={isSearchState}
        />
      ) : (
        ""
      )}
    </header>
  );
}

export default function Header() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <DesktopHeader isScrolled={scroll !== 0} />
      <MobileHeader />
    </>
  );
}
