import { BasicModal } from "@interchain-ui/react";

import { Deposit } from "@/components";
import { ModalProps } from "@/components";
import { useAppStore } from "@/store";

export const WithModalDeposit = (props: ModalProps) => {
  const isOpen = useAppStore((state) => state.isModalOpen);
  const onClose = useAppStore((state) => state.toggleModalOpen);
  const title = "";
  return (
    <BasicModal
      isOpen={isOpen}
      onClose={onClose}
      renderTrigger={function Va() {}}
      title={title}
    >
      <Deposit />
    </BasicModal>
  );
};
