import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import { SuiContainer, SuiIconButton, SuiStack } from "../../components";
import SuiBreak from "../../components/SuiBreak/SuiBreak";
import { ExContainer, ExLogos } from "../../Examples";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter().push;

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
          spacing={1}
        >
          <Box sx={{ minWidth: "300px" }}>
            <SuiStack.ColumnFlex>
              <ExLogos.LongLogo onClick={() => router("/")} />
              <SuiIconButton text="huhuuhu" />
              <Typography variant="h4">Thong tin</Typography>
              <Typography variant="h4">Thong tin</Typography>
            </SuiStack.ColumnFlex>
          </Box>

          {/* khung  */}
          <Box sx={{ width: "100%" }}>
            <SuiStack.Center>
              <SuiStack.ColumnFlex sx={{ width: "25ch" }}>
                <Typography variant="h2">Dịch vụ online</Typography>
                <SuiBreak.Small />
                <SuiStack.ColumnFlex>
                  <SuiIconButton text="Chương trình học" />
                  <SuiIconButton text="Ngân hàng bài tập" />
                  <SuiIconButton text="Kỹ năng học" />
                  <SuiIconButton text="Chia sẻ kiến thức" />
                </SuiStack.ColumnFlex>
              </SuiStack.ColumnFlex>
              <SuiStack.ColumnFlex sx={{ width: "25ch" }}>
                <Typography variant="h2">Đội ngũ Whale Edu</Typography>
                <SuiBreak.Small />
                <SuiStack.ColumnFlex>
                  <SuiIconButton text="Thành viên sáng lập" />
                  <SuiIconButton text="Giáo viên chính" />
                  <SuiIconButton text="Công nghệ giảng dạy" />
                  <SuiIconButton text="Liên hệ chúng tôi" />
                </SuiStack.ColumnFlex>
              </SuiStack.ColumnFlex>
              <SuiStack.ColumnFlex sx={{ width: "25ch" }}>
                <Typography variant="h2">Hỗ trợ</Typography>
                <SuiBreak.Small />
                <SuiStack.ColumnFlex>
                  <SuiIconButton text="Câu hỏi thường gặp" />
                  <SuiIconButton text="Hướng dẫn nạp tiền" />
                  <SuiIconButton text="Hướng dẫn thanh toán" />
                  <SuiIconButton text="Đặt câu hỏi" />
                </SuiStack.ColumnFlex>
              </SuiStack.ColumnFlex>
              <SuiStack.ColumnFlex sx={{ width: "30ch" }}>
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
