import { List, ListItem, Box, Button, Divider } from "@/components";
import { useAppStore } from "@/store";

import { Asset as AssetDataProps } from "@chain-registry/client/node_modules/@chain-registry/types/types/assets";
import { BaseProps } from "../app_common/Base";

interface AssetProps {
  data: AssetDataProps;
}

export function AssetList(props: BaseProps) {
  const toggleModalOpen = useAppStore((state) => state.toggleModalOpen);
  const setModalChild = useAppStore((state) => state.setModalChild);
  const assetList = useAppStore((state) => state.assetList);
  const handleAddBtnClick = (childName: string) => {
    setModalChild(childName);
    toggleModalOpen();
  };

  const Asset = (props: AssetProps) => (
    <ListItem
      styles={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      }}
    >
      <Box>{props.data.name}</Box>
      <Box>{props.data.symbol}</Box>
      <Box>
        <Button onClick={() => handleAddBtnClick("deposit")}>Deposit</Button>
      </Box>
    </ListItem>
  );

  return (
    <>
      <List styles={{ maxHeight: "calc(100vh - 13rem)", height: "100%" }}>
        <ListItem>
          <Box>Name</Box>
          <Box>Symbol</Box>
          <Box>Action</Box>
        </ListItem>
        {assetList.map((asset) => (
          <Asset data={asset} key={asset.symbol} />
        ))}
      </List>
      <Divider />
      <Box>
        <Button label="info" onClick={() => handleAddBtnClick("addAsset")}>
          Add Asset
        </Button>
        <Button
          label="info"
          onClick={() => handleAddBtnClick("addRandomAssets")}
        >
          Add random Assets (2-5)
        </Button>
      </Box>
    </>
  );
}
