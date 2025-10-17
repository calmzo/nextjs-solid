"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />           {/* 装饰线条 */}
          <Header />          {/* 导航头部 */}
          <ToasterContext />  {/* 全局提示 */}
          {children}          {/* 主体内容 */}
          <Footer />          {/* 页脚 */}
          <ScrollToTop />     {/* 回到顶部 */}
        </ThemeProvider>
      </body>
    </html>
  );
}
