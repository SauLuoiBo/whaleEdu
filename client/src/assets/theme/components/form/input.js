import colors from "../../base/colors";
import borders from "../../base/borders";

import pxToRem from "../../functions/pxToRem";

const { inputColors } = colors;
const { borderWidth, borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      display: "flex !important",
      padding: `${pxToRem(8)} ${pxToRem(28)} ${pxToRem(8)} ${pxToRem(
        12
      )} !important`,
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      borderRadius: `${borderRadius.md} !important`,

      "& fieldset": {
        border: "none",
      },
    },

    input: {
      height: pxToRem(32),
      width: "100% !important",
      fontSize: pxToRem(16),
    },

    inputSizeSmall: {
      height: pxToRem(14),
    },
  },
};
