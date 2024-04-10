import styled from "@emotion/styled";
import { BlockProps } from "./Base";

interface ContainerProps extends BlockProps {}

export const Container = styled("div")<ContainerProps>({}, (props) => ({
  ...props.styles,
  maxWidth: props.maxWidth,
  minWidth: props.minWidth,
  marginBottom: props.mb,
}));
