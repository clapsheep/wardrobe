"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@/lib/hooks";
import dynamic from "next/dynamic";

interface Tresponse {
  mobileContent: React.ReactNode;
  desktopContent: React.ReactNode;
}

const ResponsiveComponentInner = ({
  mobileContent,
  desktopContent,
}: Tresponse) => {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery("(max-width: 540px)");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // 또는 로딩 인디케이터
  }

  return isMobile ? mobileContent : desktopContent;
};

const ResponsiveComponent = dynamic(
  () => Promise.resolve(ResponsiveComponentInner),
  {
    ssr: false,
  },
);

export default ResponsiveComponent;
