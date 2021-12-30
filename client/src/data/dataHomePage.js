import { mainMenu } from "../assets/config/config";

export const homePageMenu = [
  {
    title: "Whale Education",
    menu: [
      { text: "Trang chủ", href: mainMenu.homePage, icon: "menu-whale.svg" },
      {
        text: "Đội ngũ giáo viên",
        href: `${mainMenu.introduce}/doi-ngu-giao-vien`,
        icon: "menu-watch.svg",
      },
      {
        text: "Ôn thi đại học",
        href: `${mainMenu.courses}/on-thi-dai-hoc`,
        icon: "menu-watch.svg",
      },
      {
        text: "Ôn thi vào mười",
        href: `${mainMenu.courses}/on-thi-vao-muoi`,
        icon: "menu-skill.svg",
      },
      {
        text: "Kiến thức phổ thông",
        href: `${mainMenu.courses}/kien-thuc-pho-thong`,
        icon: "menu-document.svg",
      },
      {
        text: "Đề thi đại học",
        href: `${mainMenu.excercise}/de-thi-dai-hoc`,
        icon: "menu-exercise.svg",
      },
      {
        text: "Đề thi vào mười",
        href: `${mainMenu.excercise}/de-thi-vao-muoi`,
        icon: "menu-join.svg",
      },
      {
        text: "Giáo trình học tập",
        href: `${mainMenu.excercise}/giao-trình-hoc-tap`,
        icon: "menu-join.svg",
      },
      {
        text: "Đề thi học kỳ",
        href: `${mainMenu.excercise}/de-thi-hoc-ky`,
        icon: "menu-join.svg",
      },
      {
        text: "Ngân hàng bài tập",
        href: `${mainMenu.excercise}/ngan-hang-bai-tap`,
        icon: "menu-join.svg",
      },
      {
        text: "Lớp học offline",
        href: `${mainMenu.offline}`,
        icon: "menu-join.svg",
      },
      {
        text: "Đăng ký học",
        href: mainMenu.pricing,
        icon: "menu-join.svg",
      },
    ],
  },
  {
    title: "Blog giáo dục",
    menu: [
      {
        text: "Sứ mệnh của Whale",
        href: `${mainMenu.introduce}/su-menh`,
        icon: "menu-we.svg",
      },
      {
        text: "Chia sẻ kiến thức",
        href: `${mainMenu.blog}/kien-thuc`,
        icon: "menu-we.svg",
      },
      {
        text: "Câu chuyện học tập",
        href: `${mainMenu.blog}/hoc-tap`,
        icon: "menu-share.svg",
      },
      {
        text: "Câu chuyện dậy học",
        href: `${mainMenu.blog}/day-hoc`,
        icon: "menu-trade.svg",
      },
      {
        text: "Thành tích",
        href: `${mainMenu.introduce}/thanh-tich`,
        icon: "menu-trade.svg",
      },
    ],
  },
  {
    title: "Xem thêm",
    menu: [
      {
        text: "Điều khoản",
        href: `${mainMenu.introduce}/dieu-khoan`,
        icon: "menu-term.svg",
      },
      {
        text: "Chính sách",
        href: `${mainMenu.introduce}/chinh-sach`,
        icon: "menu-policy.svg",
      },
      {
        text: "Hướng dẫn",
        href: `${mainMenu.introduce}/huong-dan`,
        icon: "menu-tutorial.svg",
      },
    ],
  },
];
