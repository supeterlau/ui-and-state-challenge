import React from "react";

export const darkTheme = {
  color: {
    primary: "red",
    darkIndigo: "#071530",
    paleGray: "#e5e5e8",
    background: "#3b3737",
    text: "#ffffff",
  },
};

export const lightTheme = {
  color: {
    primary: "red",
    darkIndigo: "#071530",
    paleGray: "#e5e5e8",
    background: "#efefef",
    text: "#252525",
  },
};

const ThemeToggleContext = React.createContext({});

export default ThemeToggleContext;
