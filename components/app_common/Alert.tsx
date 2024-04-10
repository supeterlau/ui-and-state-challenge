import { useEffect } from "react";
import styled from "@emotion/styled";

import { BlockProps } from "./Base";
import { buttonColors } from "./Button";

interface BaseAlertProps extends BlockProps {
  label?: string;
}

// background-color: #f44336;
// display: ${(props) => (props.close ? "none" : "block")};
const BaseAlert = styled("div")<BaseAlertProps>`
  top: 3rem;
  display: block;
  position: fixed;
  width: 80%;
  margin-left: 10%;
  padding: 20px;
  color: white;
  background-color: ${(props) =>
    buttonColors[(props.label as keyof typeof buttonColors) || "default"]
      .normal};
  margin-bottom: 15px;
  opacity: 1;
  transition: opacity 0.6s;
`;

const BaseAlertButton = styled("span")`
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
  hover {
    color: black;
  }
`;

interface AlertProps extends BaseAlertProps {
  message?: string;
  children?: React.ReactNode;
  setClose: () => void;
}

export const Alert = (props: AlertProps) => {
  useEffect(() => {
    setTimeout(() => props.setClose(), 2000);
  }, []);
  return (
    <BaseAlert label={props.label || "info"}>
      <BaseAlertButton onClick={() => props.setClose()}>
        &times;
      </BaseAlertButton>
      {props.children}
    </BaseAlert>
  );
};
