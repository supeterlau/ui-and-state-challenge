import { useEffect, useState } from "react";
import {
  Asset,
  AssetList,
} from "@chain-registry/client/node_modules/@chain-registry/types/types/assets";

import {
  ModalProps,
  withModal,
  Button,
  Container,
  Select,
  SelectOption,
  Title,
  ConfirmDialog,
} from "@/components";
import { providers } from "@/lib/data";
import { chainNames } from "@/lib/constants";
import { useAppStore } from "@/store";
import { BaseProps } from "../app_common/Base";

export const AddAsset = (props: BaseProps) => {
  const [assetSymbol, setAssetSymbol] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [assetList, setAssetList] = useState<AssetList>();
  const chainName = useAppStore((state) => state.selectedChain);
  const toggleModalOpen = useAppStore((state) => state.toggleModalOpen);
  const handleAlert = useAppStore((state) => state.handleAlert);
  const userAssetList = useAppStore((state) => state.assetList);
  const ProviderClass =
    providers[
      useAppStore((state) => state.dataSource) as keyof typeof providers
    ];
  const provider = new ProviderClass(chainNames);
  const addAsset = useAppStore((state) => state.addAssetList);

  const handleConfirm = (state: boolean) => {
    console.log("assetSymbol", assetSymbol);
    if (!assetSymbol || assetSymbol === "") {
      handleAlert("No asset selected", "warning");
    } else if (userAssetList.some((el) => el.symbol === assetSymbol)) {
      console.log(userAssetList);
      handleAlert("The Asset already exists", "warning");
    } else {
      setConfirmOpen(state);
    }
  };

  const handleAddAsset = (assetSymbol: string) => {
    const asset = assetList?.assets.find((el) => el.symbol === assetSymbol);
    addAsset(asset as Asset);
    setAssetSymbol("");
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
    toggleModalOpen();
  };

  useEffect(() => {
    const getAssetList = async () => {
      await provider.init();
      const newAssetList = provider.getAssetList(chainName);
      console.log(newAssetList);
      setAssetList(newAssetList);
    };
    getAssetList().catch(console.error);
  }, []);

  return (
    <Container
      styles={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title>Add Asset from Chain: {chainName}</Title>
      <Container
        styles={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Select
          value={assetSymbol}
          onChange={(e) => {
            setAssetSymbol(e.target.value);
          }}
        >
          <SelectOption value="0">Select Asset:</SelectOption>
          {assetList?.assets.map((asset, idx) => (
            <SelectOption value={asset.symbol} key={asset.symbol + "-" + idx}>
              {asset.name}
            </SelectOption>
          ))}
        </Select>
        <Button
          aira-label="add"
          label="info"
          onClick={() => handleConfirm(true)}
        >
          Add Asset
        </Button>
      </Container>
      <ConfirmDialog
        theme={props.theme}
        title="Add Asset?"
        open={confirmOpen}
        onClose={() => handleConfirmClose()}
        onConfirm={() => handleAddAsset(assetSymbol)}
      >
        Are you sure you want to add this asset?
      </ConfirmDialog>
    </Container>
  );
};

export const WithModalAddAsset = (props: ModalProps) =>
  withModal(AddAsset)(props);
