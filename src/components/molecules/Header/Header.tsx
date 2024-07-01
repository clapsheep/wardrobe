import { Svg } from "@/components/atoms";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full px-[83px] font-sans">
      <ul className="font-gray-800 font-b-0-regular flex justify-end gap-4 text-center">
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
        <ul className="flex grid grid-cols-6 grid-rows-1 items-center text-h-2-bold">
          <div className="col-span-1 col-start-1 flex gap-[42px]">
            <li>
              <Link href="/">Dressroom</Link>
            </li>
            <li>
              <Link href="/">Style</Link>
            </li>
          </div>
          <li className="col-span-2 col-start-3 mx-auto">
            <Link href="/">
              <Svg logo />
            </Link>
          </li>
          <li className="col-start-6 justify-self-end">
            <button>
              <Svg id="search" color="black" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
