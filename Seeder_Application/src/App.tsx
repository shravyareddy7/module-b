import { ThemeProvider } from "@emotion/react";
import { Box, Button, Card, CardContent, CssBaseline, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import theme from "./theme/index";
// import ThemedComponent from "./components/ThemeComponent";
import SummaryComponent from "./components/organisms/Summary";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      
      <SummaryComponent/>


      {/* <ThemedComponent/> */}
    </ThemeProvider>
  );
}