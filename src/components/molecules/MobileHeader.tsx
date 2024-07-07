"use client";

import { Svg } from "@/components/atoms";
import { useState } from "react";
import { MobileHamburger } from "@/components/molecules";

export default function MobileHeader() {
  const [activeBurger, setActiveBurger] = useState<boolean>(false);
  return activeBurger ? (
    <MobileHamburger closeFn={() => setActiveBurger(false)} />
  ) : (
    <header className={`flex w-full justify-between px-5`}>
      <Svg logo mobile size={127} />
      <button onClick={() => setActiveBurger(true)}>
        <Svg id="burger" />
      </button>
    </header>
  );
}
