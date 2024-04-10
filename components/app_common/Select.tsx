import styled from "@emotion/styled";
import { BaseProps, InlineProps } from "./Base";

export const Select = styled("select")<InlineProps>(
  {
    display: "block",
    padding: "0.625rem",
    borderRadius: "0.5rem",
    borderWidth: "1px",
    borderColor: "#D1D5DB",
    width: "100%",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "#111827",
    backgroundColor: "#F9FAFB",
  },
  (props) => ({
    ...props.styles,
  })
);

export const SelectOption = styled("option")<BaseProps>({}, (props) => ({
  ...props.styles,
}));
