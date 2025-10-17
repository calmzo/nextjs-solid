"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
        >
          介绍
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white `}
        >
          Bootstrap 模板指南
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white `}
        >
          样式指南
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white `}
        >
          使用 Tailwind 组件
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
