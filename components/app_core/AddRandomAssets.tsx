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

export const AddRandomAssets = () => {
  const [assetSymbols, setAssetSymbols] = useState<string[]>();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [assetList, setAssetList] = useState<AssetList>();
  const chainName = useAppStore((state) => state.selectedChain);
  const toggleModalOpen = useAppStore((state) => state.toggleModalOpen);
  const changeSelectedChain = useAppStore((state) => state.changeSelectedChain);
  const addAssets = useAppStore((state) => state.addAssets);
  const handleAlert = useAppStore((state) => state.handleAlert);
  const userAssetList = useAppStore((state) => state.assetList);
  const ProviderClass =
    providers[
      useAppStore((state) => state.dataSource) as keyof typeof providers
    ];
  const provider = new ProviderClass(chainNames);

  const handleConfirm = (state: boolean) => {
    const assetListSymbols = assetList?.assets.map((el) => el.symbol);
    if (!assetListSymbols) handleAlert("No Assets", "warning");
    const userAssetSymbols = userAssetList.map((el) => el.symbol);
    const options = Array.from(assetListSymbols!).filter(
      (symbol: string) => !userAssetSymbols.includes(symbol as string)
    );
    const optionsLength = options.length;
    if (optionsLength < 2) handleAlert("No enough Assets to add", "warning");
    else {
      let maxCount = 5;
      let minCount = 2;

      if (optionsLength < 5) {
        maxCount = optionsLength;
      }
      let difference = maxCount - minCount;
      let addCount = Math.random();
      let addAssetSymbols: string[] = [];
      addCount = Math.floor(addCount * difference) + minCount;
      Array(addCount)
        .fill(0)
        .forEach(() => {
          const start = Math.floor(Math.random() * options.length);
          addAssetSymbols.push(options[start]);
          options.splice(start, 1);
        });
      setAssetSymbols(addAssetSymbols);
      setConfirmOpen(state);
    }
  };

  const handleAddAsset = () => {
    const assets = assetSymbols?.map((symbol) =>
      assetList?.assets.find((el) => el.symbol === symbol)
    );
    addAssets(assets as Asset[]);
    setAssetSymbols([]);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
    toggleModalOpen();
  };

  useEffect(() => {
    const getAssetList = async () => {
      await provider.init();
      const newAssetList = provider.getAssetList(chainName);
      setAssetList(newAssetList);
    };
    getAssetList().catch(console.error);
  }, [chainName]);

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
      <Title>Add Assets Randomly</Title>
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
          value={chainName}
          onChange={(e) => {
            changeSelectedChain(e.target.value);
          }}
        >
          <SelectOption value="0">Select Default Chain:</SelectOption>
          {chainNames.map((chainName) => (
            <SelectOption value={chainName} key={chainName}>
              {chainName}
            </SelectOption>
          ))}
        </Select>
        <Button
          aira-label="add"
          label="info"
          onClick={() => handleConfirm(true)}
        >
          Add Assets
        </Button>
      </Container>
      <ConfirmDialog
        title="Add Assets?"
        open={confirmOpen}
        onClose={() => handleConfirmClose()}
        onConfirm={() => handleAddAsset()}
      >
        Are you sure you want to add those assets?
      </ConfirmDialog>
    </Container>
  );
};

export const WithModalAddRandomAssets = (props: ModalProps) =>
  withModal(AddRandomAssets)(props);
