import { learnMenu } from "../assets/config/config";

export const learnPageMenu = [
  {
    title: "Lộ trình ôn thi",
    menu: [
      {
        text: "Ôn thi đại học",
        href: learnMenu.daiHoc,
        icon: "menu-whale.svg",
      },
      {
        text: "Ôn thi vào 10",
        href: learnMenu.vaoMuoi,
        icon: "menu-watch.svg",
      },
      { text: "Kỹ năng", href: learnMenu.kyNang, icon: "menu-skill.svg" },
      {
        text: "Tư duy học",
        href: learnMenu.tuDuyHoc,
        icon: "menu-document.svg",
      },
      {
        text: "Chuyên đề",
        href: learnMenu.chuyenDe,
        icon: "menu-exercise.svg",
      },

      {
        text: "Lấy lại gốc",
        href: learnMenu.layLaiGoc,
        icon: "menu-join.svg",
      },
      {
        text: "Nâng cao",
        href: learnMenu.nangCao,
        icon: "menu-join.svg",
      },
    ],
  },
  {
    title: "Chữa bài tập - đề thi",
    menu: [
      {
        text: "Đề thi đại học",
        href: learnMenu.lop10,
        icon: "menu-we.svg",
      },
      { text: "Đề thi vào 10", href: learnMenu.lop10, icon: "menu-share.svg" },
      { text: "Đề thi học kỳ", href: learnMenu.lop10, icon: "menu-trade.svg" },
      {
        text: "Ngân hàng bài tập",
        href: learnMenu.lop10,
        icon: "menu-trade.svg",
      },
    ],
  },
  {
    title: "Kiến thức cơ sở",
    menu: [
      {
        text: "Lớp 9",
        href: learnMenu.lop9,
        icon: "menu-teachers.svg",
      },
      { text: "Lớp 8", href: learnMenu.lop8, icon: "menu-share.svg" },
      { text: "Lớp 7", href: learnMenu.lop7, icon: "menu-trade.svg" },
      { text: "Lớp 6", href: learnMenu.lop6, icon: "menu-trade.svg" },
    ],
  },
  {
    title: "Kiến thức phổ thông",
    menu: [
      {
        text: "Lớp 12",
        href: learnMenu.lop12,
        icon: "menu-term.svg",
      },
      { text: "Lớp 11", href: learnMenu.lop11, icon: "menu-policy.svg" },
      { text: "Lớp 10", href: learnMenu.lop10, icon: "menu-tutorial.svg" },
    ],
  },
  {
    title: "Tất cả khoá học",
    menu: [
      {
        text: "Tất cả",
        href: learnMenu.all,
        icon: "menu-term.svg",
      },
    ],
  },
];
