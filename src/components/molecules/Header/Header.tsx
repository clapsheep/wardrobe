"use client";
import { Svg } from "@/components/atoms";
import { useState, useEffect } from "react";
import Link from "next/link";

export function InitialHeader() {
  return (
    <header className="w-full px-[83px] pt-[52px] font-sans">
      <ul className="font-gray-800 flex justify-end gap-4 text-center text-b-0-regular">
        <li>
          <Link href="/" className="flex items-center gap-1">
            <Svg id="person" size={18} />
            Profile
          </Link>
        </li>
        <li>
          <Link href="/" className="flex items-center gap-1">
            <Svg id="bookmark" size={18} /> Bookmark
          </Link>
        </li>
        <li>
          {/* 사용자의 로그인 여부에 따라 다른 아이콘과 설명 렌더링*/}
          <Link href="/" className="flex items-center gap-1">
            <Svg id="log-out" size={18} /> Logout
          </Link>
          {/*<Link href="/"  className="flex items-center gap-1">
          <Svg id="log-in" /> Login
        </Link>*/}
        </li>
      </ul>
      <nav className="">
        <ul className="flex grid grid-cols-7 grid-rows-1 items-center text-h-2-bold">
          <div className="col-span-2 col-start-1 flex gap-[42px]">
            <li>
              <Link href="/">Dressroom</Link>
            </li>
            <li>
              <Link href="/">Style</Link>
            </li>
          </div>
          <li className="col-span-1 col-start-4 mx-auto max-w-full">
            <Link className="w-[265px] max-w-full" href="/">
              <Svg mobile logo size={265} />
            </Link>
          </li>
          <li className="col-start-8 justify-self-end">
            <button>
              <Svg id="search" size={38} color="black" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function ScrollHeader() {
  return (
    <header className="mt-[73px] w-full px-[83px] font-sans">
      <nav>
        <ul className="flex grid grid-cols-7 grid-rows-1 items-center">
          <div className="col-span-2 col-start-1 flex gap-[42px] text-h-2-bold">
            <li>
              <Link href="/">Dressroom</Link>
            </li>
            <li>
              <Link href="/">Style</Link>
            </li>
          </div>
          <li className="col-span-1 col-start-4 mx-auto max-w-full">
            <Link className="w-[265px] max-w-full" href="/">
              <Svg mobile logo size={265} />
            </Link>
          </li>
          <ul className="col-span-2 col-start-6 flex gap-[34px] justify-self-center">
            <li>
              <Link href="/">
                <Svg id="person" size={28} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Svg id="bookmark" size={28} />
              </Link>
            </li>
            <li>
              {/* 사용자의 로그인 여부에 따라 다른 아이콘과 설명 렌더링*/}
              <Link href="/">
                <Svg id="log-out" size={28} />
              </Link>
              {/*<Link href="/"  className="flex items-center gap-1">
          <Svg id="log-in" /> Login
        </Link>*/}
            </li>
          </ul>
          <li className="col-start-8 justify-self-end">
            <button>
              <Svg id="search" size={28} color="black" />
            </button>
          </li>
        </ul>
      </nav>
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
  return scroll == 0 ? <InitialHeader /> : <ScrollHeader />;
}
