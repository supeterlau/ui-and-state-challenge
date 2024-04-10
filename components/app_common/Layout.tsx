import {
  Modal,
  Alert,
  ModalProps,
  AppHead,
  Container,
  Header,
  Footer,
  AddAsset,
  AddRandomAssets,
  Deposit,
  WithModalAddAsset,
  WithModalAddRandomAssets,
  WithModalDeposit,
} from "@/components";
import { useAppStore } from "@/store";
import { BaseProps } from "./Base";

export const Layout = ({ children, ...props }: BaseProps) => {
  const isModalOpen = useAppStore((state) => state.isModalOpen);
  const toggleModalOpen = useAppStore((state) => state.toggleModalOpen);
  const modalChild = useAppStore((state) => state.modalChild);
  const setModalChild = useAppStore((state) => state.setModalChild);
  const isShowAlert = useAppStore((state) => state.isShowAlert);
  const hideAlert = useAppStore((state) => state.hideAlert);
  const alertMessage = useAppStore((state) => state.alertMessage);
  const setAlertMessage = useAppStore((state) => state.setAlertMessage);
  const alertLabel = useAppStore((state) => state.alertLabel);
  const setAlertLabel = useAppStore((state) => state.setAlertLabel);
  const modalChildren = {
    addAsset: AddAsset,
    addRandomAssets: AddRandomAssets,
    deposit: Deposit,
  };
  interface ShowModalProps extends ModalProps {
    modalChild: string;
  }
  const ShowModal = ({ modalChild, ...props }: ShowModalProps) => {
    if (modalChild === "addAsset") return <WithModalAddAsset {...props} />;
    if (modalChild === "deposit") return <WithModalDeposit {...props} />;
    if (modalChild === "addRandomAssets")
      return <WithModalAddRandomAssets {...props} />;
    return <WithModalAddAsset {...props} />;
  };
  const showAlert = (label: string, message: string) => {
    setAlertLabel(label);
    setAlertMessage(message);
  };
  return (
    <Container
      styles={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "0 1rem 1rem",
      }}
    >
      <AppHead />
      <div style={{ flexGrow: 1, flexShrink: 0 }}>{children}</div>
      {/* {isModalOpen ? ( */}
      {/*   <Modal close={() => toggleModalOpen()}> */}
      {/*     {modalChildren[modalChild as keyof typeof modalChildren]()} */}
      {/*   </Modal> */}
      {/* ) : null} */}
      {isModalOpen ? (
        <ShowModal
          theme={props.theme}
          modalChild={modalChild}
          close={() => toggleModalOpen()}
        />
      ) : null}
      {isShowAlert ? (
        <Alert setClose={() => hideAlert()} label={alertLabel}>
          {alertMessage}
        </Alert>
      ) : null}
    </Container>
  );
};
