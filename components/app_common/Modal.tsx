import styled from "@emotion/styled";
import { BlockProps } from "./Base";

export const ModalTitle = () => <div>ModalTitle</div>;

const ModalContainer = styled("div")<BlockProps>({}, (props) => ({
  color: props.theme.color.text,
  backgroundColor: props.theme.color.background,
  ...props.styles,
}));

const ModalBackground = styled("div")<BlockProps>(
  {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.3)",
  },
  (props) => ({
    ...props.styles,
  })
);

const ModalContent = styled("div")<BlockProps>(
  {
    position: "absolute",
    left: "50%",
    top: "20rem",
    width: "calc(100vw - 4rem)",
    maxWidth: "32rem",
    maxHeight: "calc(100vh - 4rem)",
    overflow: "auto",
    transform: "translate(-50%, -50%)",
    padding: "1rem",
    borderRadius: "0.2rem",
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  (props) => ({
    color: props.theme.color.text,
    backgroundColor: props.theme.color.background,
    ...props.styles,
  })
);

export interface ModalProps {
  children?: React.ReactNode;
  close: () => void;
}

export const Modal = (props: ModalProps) => {
  return (
    <>
      <ModalContainer>
        <ModalBackground onClick={() => props.close()}></ModalBackground>
        <ModalContent>{props.children}</ModalContent>
      </ModalContainer>
    </>
  );
};

export const withModal = (WrappedComponent: React.FC) => {
  const WithModal = (props: ModalProps) => (
    <Modal {...props}>
      <WrappedComponent />
    </Modal>
  );
  return WithModal;
};
