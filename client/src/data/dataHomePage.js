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
      {
        text: "Học trực tiếp",
        href: mainMenu.pricing,
        icon: "menu-join.svg",
      },
      {
        text: "Blog chia sẻ",
        href: mainMenu.pricing,
        icon: "menu-join.svg",
      },
    ],
  },
  {
    title: "Đời sống học sinh",
    menu: [
      {
        text: "Câu chuyện học tập",
        href: mainMenu.homePage,
        icon: "menu-we.svg",
      },
      { text: "Chia sẻ", href: mainMenu.courses, icon: "menu-share.svg" },
      { text: "Giao lưu", href: mainMenu.skill, icon: "menu-trade.svg" },
    ],
  },
  {
    title: "Đời sống giáo viên",
    menu: [
      {
        text: "Câu chuyện đào tạo",
        href: mainMenu.homePage,
        icon: "menu-teachers.svg",
      },
      { text: "Chia sẻ", href: mainMenu.courses, icon: "menu-share.svg" },
      { text: "Giao lưu", href: mainMenu.skill, icon: "menu-trade.svg" },
    ],
  },
  {
    title: "Xem thêm",
    menu: [
      {
        text: "Điều khoản",
        href: mainMenu.homePage,
        icon: "menu-term.svg",
      },
      { text: "Chính sách", href: mainMenu.courses, icon: "menu-policy.svg" },
      { text: "Hướng dẫn", href: mainMenu.skill, icon: "menu-tutorial.svg" },
    ],
  },
];
