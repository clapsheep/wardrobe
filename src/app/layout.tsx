import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import {
  Header,
  SearchModal,
  Footer,
  MobileHamburger,
} from "@/components/molecules";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "wardrobe",
  description:
    "나만의 옷장관리 서비스 'wardrobe', 자신이 구매한 옷들을 손쉽게 관리하고, 스타일 추천까지 받아보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
