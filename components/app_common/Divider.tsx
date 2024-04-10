import styled from "@emotion/styled";
import { BlockProps } from "./Base";

interface DividerProps extends BlockProps {
  mb?: string;
}

const Container = styled("hr")<DividerProps>`
  border-top: 2px solid #bbb;
  margin-bottom: ${(props) => props.mb || 0.5}rem;
`;

export const Divider = ({ mb }: DividerProps) => <Container mb={mb} />;
