import styled from "@emotion/styled";
import { BlockProps } from "./Base";

export const List = styled("ul")<BlockProps>(
  {
    overflowY: "scroll",
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  (props) => ({
    color: props.theme.color.text,
    backgroundColor: props.theme.color.background,
    ...props.styles,
  })
);

export const ListItem = styled("li")<BlockProps>(
  {
    border: "1px solid #ddd",
    marginTop: "-1px",
    backgroundColor: "#f6f6f6",
    padding: "12px",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  (props) => ({
    color: props.theme.color.text,
    backgroundColor: props.theme.color.background,
    ...props.styles,
  })
);
