import React from "react";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "价格页面 - Solid SaaS 模板",

  // other metadata
  description: "这是 Solid Pro 的价格页面"
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Pricing />
    </div>
  );
};

export default SupportPage;
