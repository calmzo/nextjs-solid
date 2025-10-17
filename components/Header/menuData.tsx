import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "首页",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "功能特性",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "博客",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "文档",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "页面",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "博客列表",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "登录",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "注册",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "文档",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "支持",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "支持",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
