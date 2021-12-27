export const coverLineText = (line) => {
  const css = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": line,
    "-webkit-box-orient": "vertical",
  };
  return css;
};
