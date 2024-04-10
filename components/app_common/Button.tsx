import styled from "@emotion/styled";
import { InlineProps } from "./Base";

interface ButtonProps extends InlineProps {
  label?: string;
}

export const buttonColors = {
  success: {
    normal: "#04AA6D",
    color: "white",
    hover: "#46a049",
  },
  info: {
    normal: "#2196F3",
    color: "white",
    hover: "#0b7dda",
  },
  warning: {
    normal: "#ff9800",
    color: "white",
    hover: "#e68a00",
  },
  danger: {
    normal: "#f44336",
    color: "white",
    hover: "#da190b",
  },
  default: {
    normal: "#e7e7e7",
    color: "black",
    hover: "#ddd",
  },
};

export const Button = styled("button")<ButtonProps>(
  {
    border: "none",
    borderRadius: "5px",
    padding: "14px 28px",
    cursor: "pointer",
  },
  (props) => {
    const label = (props.label as keyof typeof buttonColors) || "default";
    let color = buttonColors[label].color;
    return {
      ...props.styles,
      backgroundColor: buttonColors[label].normal,
      color,
      ":hover": {
        backgroundColor: buttonColors[label].hover,
      },
    };
  }
);
