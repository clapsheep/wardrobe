import Link from "next/link";

export default function Footer() {
  const style = {
    h3: "uppercase font-bold text-b-2-bold",
    li: "flex flex-col gap-1",
    link: "",
  };

  return (
    <footer className="w-full px-[85px] text-b-3-regular text-gray-800 mobile:px-[20px]">
      <nav className="border-y border-gray-200 py-5">
        <ul className="flex gap-16">
          <li className={`${style.li} `}>
            <h3 className={`${style.h3}`}>home</h3>
            <Link className={`${style.link}`} href="">
              style 추천
            </Link>
          </li>
          <li className={`${style.li}`}>
            <h3 className={`${style.h3}`}>dressroom</h3>
            <Link className={`${style.link}`} href="">
              나의 옷장
            </Link>
          </li>
          <li className={`${style.li}`}>
            <h3 className={`${style.h3}`}>style</h3>
            <Link className={`${style.link}`} href="">
              스타일
            </Link>
          </li>
          <li className={`${style.li}`}>
            <h3 className={`${style.h3}`}>my page</h3>
            <Link className={`${style.link}`} href="">
              회원정보 수정
            </Link>
            <Link className={`${style.link}`} href="">
              마이 사이즈
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col gap-5 py-5">
        <div className="flex gap-[6px]">
          <Link className="text-b-3-semibold" href="#">
            개인정보처리방침
          </Link>
          <div className="h-[1rem] border-r border-gray-400"></div>
          <Link className="" href="#">
            이용약관
          </Link>
        </div>
        <address className="flex-col not-italic text-gray-500 mobile:flex">
          <span>상호명 : wardrobe </span>
          <span>소재지 : 서울특별시 종로구 종로3길 17 </span>
          <Link href="mailto:localhost1101@naver.com">
            이메일 : localhost1101@naver.com
          </Link>
          <div className="my-[8px] flex gap-[8px]">
            <Link
              className="flex items-center gap-1"
              href="https://github.com/clapsheep/wardrobe"
            >
              <svg
                height="12"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="12"
                data-view-component="true"
                className="octicon octicon-mark-github v-align-middle color-fg-default"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              Github
            </Link>
            <div>
              Developed by{" "}
              <Link href="https://github.com/clapsheep">박수양, </Link>
              <Link href="https://github.com/jio-ping">손현지, </Link>
              <Link href="https://github.com/lanuioe">반현지</Link>
            </div>
          </div>
        </address>
      </div>
    </footer>
  );
}
