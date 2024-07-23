"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);

      const listener = () => setMatches(media.matches);

      // 초기 상태 설정 및 이벤트 리스너 추가
      setMatches(media.matches);
      media.addEventListener("change", listener);

      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        media.removeEventListener("change", listener);
      };
    }
  }, [query]);

  return matches;
};
