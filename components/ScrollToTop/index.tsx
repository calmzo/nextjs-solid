import { useEffect, useState } from "react";

/**
 * ScrollToTop 组件 - 回到顶部按钮
 * 当用户滚动超过300像素时显示回到顶部按钮
 * 点击按钮可以平滑滚动到页面顶部
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  /**
   * 滚动到页面顶部
   * top: 0 将页面滚动到最顶部
   * behavior: "smooth" 实现平滑滚动效果
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    /**
     * 切换按钮可见性
     * 当滚动超过300像素时显示按钮
     */
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 添加滚动事件监听器
    window.addEventListener("scroll", toggleVisibility);

    // 清理事件监听器
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="z-99 fixed bottom-8 right-8">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="回到顶部"
          className="hover:shadow-signUp rounded-xs bg-primary hover:bg-primary/80 flex h-10 w-10 cursor-pointer items-center justify-center text-white shadow-md transition duration-300 ease-in-out"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
          <span className="sr-only">回到顶部</span>
        </div>
      )}
    </div>
  );
}
