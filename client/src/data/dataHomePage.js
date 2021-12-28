import { mainMenu } from "../assets/config/config";

export const homePageMenu = [
  {
    title: "Whale Education",
    menu: [
      { text: "Trang chủ", href: mainMenu.homePage, icon: "menu-whale.svg" },
      { text: "Khoá học", href: mainMenu.courses, icon: "menu-watch.svg" },
      { text: "Kỹ năng", href: mainMenu.skill, icon: "menu-skill.svg" },
      {
        text: "Tài liệu học",
        href: mainMenu.document,
        icon: "menu-document.svg",
      },
      { text: "Bài tập", href: mainMenu.excercise, icon: "menu-exercise.svg" },
      { text: "Đăng ký", href: mainMenu.pricing, icon: "menu-join.svg" },
    ],
  },
];
