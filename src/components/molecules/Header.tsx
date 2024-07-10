"use client";
import Link from "next/link";
import { Svg } from "@/components/atoms";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MobileHamburger, SearchModal } from "@/components/molecules";

export default function Header() {
  const pathname = usePathname();
  const [scroll, setScroll] = useState(0);
  const [screen, setScreen] = useState<string | null>(null);
  //mobile burger
  const [activeBurger, setActiveBurger] = useState<boolean>(false);
  //search
  const [isSearchState, setIsSearchState] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    const handleResize = () => {
      setScreen(window.outerWidth > 540 ? "desktop" : "mobile");
    };
    // 컴포넌트가 마운트될 때 초기 화면 크기 설정
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isLogin = true;

  const navItems = [
    { href: "/dressroom", text: "Dressroom" },
    { href: "/style", text: "Style" },
  ];

  return (
    <>
      <header className="hidden w-full mobile:inline-block mobile:flex mobile:justify-between">
        <Link href="/">
          <Svg id="logo-mobile_Black" />
        </Link>
        <button onClick={() => setActiveBurger(true)}>
          <Svg id="burger" />
        </button>
      </header>{" "}
      {activeBurger ? (
        <MobileHamburger
          isSearchState={isSearchState}
          handleSearchState={setIsSearchState}
          closeFn={() => setActiveBurger(false)}
        />
      ) : (
        ""
      )}
      <header className="font-gray-800 w-full font-sans my-1">
        <nav className="flex w-screen items-center justify-between px-20 mobile:px-1">
          <ul className="flex justify-between gap-10 text-h-2-bold mobile:hidden">
            {navItems.map((item) => (
              <li
                className={`${pathname === `${item.href}` ? "decoration-7 underline underline-offset-8" : ""}`}
                key={item.text}
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
          <Link className="max-w-full mobile:hidden" href="/">
            <Svg id="logo-web_Black" />
          </Link>
          <div
            className={`flex mobile:hidden ${scroll ? "items-start gap-2" : "flex-col items-end"}`}
          >
            <ul className={`flex gap-3 ${scroll ? "justify-start gap-4" : ""}`}>
              <li>
                <Link className="flex" href="/profile">
                  <Svg id="person" size={scroll ? 28 : 18} />
                  <span className={`${scroll ? "sr-only" : ""}`}>profile</span>
                </Link>
              </li>
              <li>
                <Link className="flex" href="/profile/bookmark">
                  <Svg id="bookmark_false" size={scroll ? 28 : 18} />
                  <span className={`${scroll ? "sr-only" : ""}`}>bookmark</span>
                </Link>
              </li>
              {isLogin ? (
                <li>
                  <button className="flex">
                    <Svg id="log-out" size={scroll ? 28 : 18} />
                    <span className={`${scroll ? "sr-only" : ""}`}>Logout</span>
                  </button>
                </li>
              ) : (
                <li>
                  <Link className="flex" href="/login">
                    <Svg id="log-in" size={scroll ? 28 : 18} />
                    <span className={`${scroll ? "sr-only" : ""}`}>Login</span>
                  </Link>
                </li>
              )}
            </ul>
            <button onClick={() => setIsSearchState(true)}>
              <Svg size={scroll ? 28 : 38} id="search" />
            </button>
          </div>
        </nav>
      </header>{" "}
      {isSearchState ? (
        <SearchModal
          closeFn={() => setIsSearchState(false)}
          open={isSearchState}
        />
      ) : (
        ""
      )}
    </>
  );
}
