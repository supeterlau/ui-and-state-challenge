import React from "react";

import { ThemeProvider } from "@emotion/react";
import { useDarkMode } from "@/lib/hooks";
import ThemeToggleContext, { darkTheme, lightTheme } from "@/lib/theme";

import styled from "@emotion/styled";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BaseProps } from "./Base";

const StyledMain = styled.main`
  height: calc(100vh - 5em);
  width: 100%;
`;

const MainLayoutContainer = styled.div<BaseProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.text};
  background: ${(props) => props.theme.color.background};
`;

export function MainLayout(props) {
  // const darkMode = useDarkMode(true);
  // const currentTheme = darkMode.enabled ? darkTheme : lightTheme;
  const [isDarkTheme, setDarkTheme] = useDarkMode();
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        {isMounted && (
          <ThemeToggleContext.Provider
            value={{
              isDarkTheme,
              toggleTheme: () => setDarkTheme(!isDarkTheme),
            }}
          >
            <MainLayoutContainer>
              <Header />
              <StyledMain>{props.children}</StyledMain>
              <Footer />
            </MainLayoutContainer>
          </ThemeToggleContext.Provider>
        )}
      </ThemeProvider>
    </>
  );
}
