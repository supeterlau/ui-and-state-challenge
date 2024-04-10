import React, { CSSProperties } from "react";
import { BlockProps } from "./Base";

interface DialogProps extends BlockProps {
  children: React.ReactNode;
  open: boolean;
  onClose: Function;
}

function Dialog(props: DialogProps) {
  const { open, onClose } = props;
  if (!open) {
    return <></>;
  }
  return (
    <div
      style={{
        display: "flex",
        overflow: "auto",
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        zIndex: 50,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        // color: props.theme?.color.text,
        // backgroundColor: props.theme?.color.background,
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          // position: "relative",
          // padding: "2rem",
          flexDirection: "column",
          borderRadius: "0.5rem",
          // width: "100%",
          // maxWidth: "28rem",
          backgroundColor: "#ffffff",
          color: "#252525",
          // backgroundColor: props.theme?.color.background,
        }}
      >
        <div>{props.children}</div>
        <span
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            padding: "1rem",
          }}
        >
          <IconButton onClick={() => onClose()}>
            <ExitIcon />
          </IconButton>
        </span>
      </div>
    </div>
  );
}

function ExitIcon() {
  return (
    <svg
      style={{ width: "1.5rem", height: "1.5rem", fill: "currentColor" }}
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
    </svg>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: Object;
}

function Button(props: ButtonProps) {
  const { type = "button", children, onClick, style = {} } = props;
  return (
    <button
      style={{
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderRadius: "0.25rem",
        fontWeight: 700,
        color: "#ffffff",
        ...style,
      }}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: string;
}

interface CSSPropertiesWithMore extends CSSProperties {
  "--color": string;
  "--bg-opacity": string;
  ":hover": {};
}

function IconButton(props: IconButtonProps) {
  const {
    children,
    onClick = (event: React.MouseEvent<HTMLButtonElement>) => {},
    style = {},
  } = props;
  const localStyle = {
    display: "inline-flex",
    padding: "0.5rem",
    alignItems: "center",
    borderRadius: "9999px",
    ":hover": { backgroundColor: "#9CA3AF", "--bg-opacity": "0.25" },
    ...style,
  };
  return (
    <button onClick={onClick} style={localStyle}>
      {children}
    </button>
  );
}

interface ConfirmProps extends DialogProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: Function;
  onConfirm: Function;
}

export function ConfirmDialog(props: ConfirmProps) {
  const { open, onClose, title, children, onConfirm } = props;
  if (!open) {
    return <></>;
  }

  return (
    <Dialog open={open} onClose={onClose} theme={props.theme}>
      <h2 style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>{title}</h2>
      <div style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}>
        {children}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ padding: "0.25rem" }}>
          <Button
            onClick={() => onClose()}
            style={{
              backgroundColor: "#6E757C",
              ":hover": { backgroundColor: "#F7F8F9" },
            }}
          >
            No
          </Button>
        </div>
        <div
          style={{
            padding: "0.25rem",
          }}
        >
          <Button
            style={{
              color: "black",
            }}
            onClick={() => {
              onClose();
              onConfirm();
            }}
          >
            Yes
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
