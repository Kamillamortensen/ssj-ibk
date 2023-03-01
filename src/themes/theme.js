import { grey, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: grey[900],
    secondary: pink,
  },
});