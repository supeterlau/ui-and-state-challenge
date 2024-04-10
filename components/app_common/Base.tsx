import { CSSProperties } from "react";
import { darkTheme } from "@/lib/theme";

export interface BaseProps {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  display?: string;
  mb?: string;
  styles?: CSSProperties;
  theme?: typeof darkTheme;
  children?: React.ReactNode;
}

export interface BlockProps extends BaseProps {}

export interface InlineProps extends BaseProps {}
