import React from "react";
import GlobalStyle from "./global";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

const StyleProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
