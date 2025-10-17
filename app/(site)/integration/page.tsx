import React from "react";
import Integration from "@/components/Integration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "集成页面 - Solid SaaS 模板",

  // other metadata
  description: "这是 Solid Pro 的集成页面"
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Integration />
    </div>
  );
};

export default SupportPage;
