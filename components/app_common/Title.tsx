import styled from "@emotion/styled";
import { BlockProps } from "./Base";

export const Title = styled("h1")<BlockProps>({}, (props) => ({
  color: props.theme.color.text,
  backgroundColor: props.theme.color.background,
  ...props.styles,
}));
