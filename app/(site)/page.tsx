import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Next.js 启动模板 - Solid SaaS",

  // other metadata
  description: "首页"
};

export default function Home() {
  return (
    <main>
      <Hero />        {/* 首页区域 */}
      <Brands />      {/* 品牌展示 */}
      <Feature />     {/* 功能特性 */}
      <About />       {/* 关于我们 */}
      <FeaturesTab /> {/* 功能标签 */}
      <FunFact />     {/* 趣味数据 */}
      <Integration /> {/* 集成选项 */}
      <CTA />         {/* 行动号召 */}
      <FAQ />         {/* 常见问题 */}
      <Testimonial /> {/* 客户评价 */}
      <Pricing />     {/* 价格方案 */}
      <Contact />     {/* 联系页面 */}
      <Blog />        {/* 博客列表 */}
    </main>
  );
}
