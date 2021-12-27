import React from "react";
import { SuiStack } from "../../../components";
import { ExBlog } from "../../../Examples";

const HomeKeyBlog = () => {
  return (
    <SuiStack.ColumnFlex
      sx={{
        p: 2,
        gap: 1,
        backgroundColor: "white.main",

        borderRadius: "20px",
      }}
    >
      <ExBlog.CardHome />

      <ExBlog.CardHome />

      <ExBlog.CardHome />
    </SuiStack.ColumnFlex>
  );
};

export default HomeKeyBlog;
