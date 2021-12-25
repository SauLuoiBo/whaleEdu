import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import { SuiContainer, SuiIconButton, SuiStack } from "../../components";
import SuiBreak from "../../components/SuiBreak/SuiBreak";
import { ExContainer, ExLogos } from "../../Examples";
import { dataFooter, dataFooter_Social } from "./dataFooter";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#7BC8F3", height: "fit-content" }}>
      <SuiBreak xs={10} lg={30} />
      <SuiContainer>
        <ExContainer.GetStart />
      </SuiContainer>
      <SuiBreak.Large />
      <SuiContainer>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={{ xs: "flex-start", md: "flex-start" }}
          spacing={4}
        >
          <Box sx={{ width: "300px" }}>
            <SuiStack.ColumnFlex>
              <ExLogos.LongLogo href={"/"} />
              <Typography variant="h2">" Tôi tự học, bạn cũng thế "</Typography>
              <SuiBreak.Small />

              <SuiStack.Center>
                {dataFooter_Social.map((item, i) => {
                  return (
                    <SuiIconButton.Logo
                      key={i}
                      size={30}
                      src={item.src}
                      href={item.link}
                      alt={item.alt}
                    />
                  );
                })}
              </SuiStack.Center>
              <SuiBreak.Small />
              <Typography variant="h4">
                Theo dõi các trang mạng xã hội của Whale Edu để cập nhật các tin
                tức mới của chúng tôi.
              </Typography>
            </SuiStack.ColumnFlex>
          </Box>

          {/* khung  */}
          <Box sx={{ width: "100%" }}>
            <SuiStack.Center>
              {dataFooter.map((data, i) => {
                return (
                  <SuiStack.ColumnFlex sx={{ width: "23ch" }} key={i}>
                    <Typography variant="h2">{data.name || "name"}</Typography>
                    <SuiBreak.Small />
                    <SuiStack.ColumnFlex>
                      {data.data.map((item, i) => {
                        return (
                          <SuiIconButton
                            text={item.text}
                            href={item.link}
                            key={i}
                          />
                        );
                      })}
                    </SuiStack.ColumnFlex>
                  </SuiStack.ColumnFlex>
                );
              })}

              <SuiStack.ColumnFlex sx={{ width: { xs: "100%", md: "37ch" } }}>
                <Typography variant="h2">Cơ sở offline</Typography>
                <SuiBreak.Small />
                <SuiStack.ColumnFlex>
                  <SuiIconButton text="số 1, Vân Nội, Đông Anh, Hà Nội" />
                  <SuiIconButton text="tổ 3, thị trấn Đông Anh, Hà Nội" />
                </SuiStack.ColumnFlex>
              </SuiStack.ColumnFlex>
            </SuiStack.Center>
          </Box>
        </Stack>
      </SuiContainer>
      <SuiBreak.Medium />
      <Box width={"100%"} borderBottom={"2px solid red"} />
      <SuiBreak.Small />
      <SuiContainer>
        <SuiStack.Column>
          <Typography variant="h4">
            © Bản quyền thuộc về WhaleEdu.vn | Cung cấp bởi
          </Typography>
          <Typography>SauLuoi Dev</Typography>
        </SuiStack.Column>
      </SuiContainer>
      <SuiBreak.Small />
    </footer>
  );
};

export default Footer;
