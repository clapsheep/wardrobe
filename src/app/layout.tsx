import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import {
  Header,
  SearchModal,
  Footer,
  MobileHamburger,
} from "@/components/molecules";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
