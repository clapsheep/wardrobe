"use client";
import { useState, useEffect } from "react";
import { DesktopHeader, MobileHeader } from "@/components/molecules";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const [screen, setScreen] = useState<string | null>(null);
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

  return screen === "mobile" ? (
    <MobileHeader />
  ) : (
    <DesktopHeader isScrolled={scroll !== 0} />
  );
}
