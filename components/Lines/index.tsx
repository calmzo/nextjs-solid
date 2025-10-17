import React from "react";

/**
 * Lines 组件 - 背景装饰线条
 * 在页面背景中显示三条垂直的装饰线条，带有动画效果
 * 用于增强页面的视觉层次和动态感
 */
const Lines = () => {
  return (
    <div className="fixed left-0 top-0 -z-20 flex h-full w-full items-center justify-around">
      {/* 第一条装饰线条 - 带动画效果 */}
      <span className="flex h-full w-[1px] animate-line1 bg-stroke dark:bg-strokedark"></span>
      {/* 第二条装饰线条 - 带动画效果 */}
      <span className="flex h-full w-[1px] animate-line2 bg-stroke dark:bg-strokedark"></span>
      {/* 第三条装饰线条 - 带动画效果 */}
      <span className="flex h-full w-[1px] animate-line3 bg-stroke dark:bg-strokedark"></span>
    </div>
  );
};

export default Lines;
