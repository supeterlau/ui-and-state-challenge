import styled from "@emotion/styled";
import { BlockProps } from "./Base";

interface BoxProps extends BlockProps {
  alignItems?: string;
  justifyContent?: string;
}

export const Box = styled("div")<BoxProps>(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "4px",
    paddingTop: "2px",
  },
  (props) => ({
    display: props.display,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    color: props.theme.color.text,
    backgroundColor: props.theme.color.background,
    ...props.styles,
  })
);
