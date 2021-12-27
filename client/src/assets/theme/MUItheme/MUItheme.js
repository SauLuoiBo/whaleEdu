import React from "react";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Defalttheme } from "../theme/theme";
import button from "../components/button";
import icon from "../components/icon";
import iconButton from "../components/iconButton";
import svgIcon from "../components/svgIcon";
import appBar from "../components/appBar";
import toolBar from "../components/toolBar";
import select from "../components/form/select";
import formControlLabel from "../components/form/formControlLabel";
import formLabel from "../components/form/formLabel";
import checkbox from "../components/form/checkbox";
import radio from "../components/form/radio";
import autocomplete from "../components/form/autocomplete";
import input from "../components/form/input";
import inputBase from "../components/form/inputBase";
import switchButton from "../components/form/switchButton";

const theme = createTheme({
  ...Defalttheme,
  components: {
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiSvgIcon: { ...svgIcon },
    MuiIcon: { ...icon },
    MuiAppBar: { ...appBar },
    MuiToolbar: { ...toolBar },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiInput: { ...input },
    MuiOutlinedInput: { ...input },
    MuiFilledInput: { ...input },
    MuiInputBase: { ...inputBase },
    MuiSwitch: { ...switchButton },
  },
});

const MUItheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUItheme;
