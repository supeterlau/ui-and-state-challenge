import { useState } from "react";
import { useAppStore } from "@/store";
import {
  Box,
  Layout,
  Divider,
  Container,
  Select,
  SelectOption,
  Title,
} from "@/components";
import { chainNames, dataSources } from "@/lib/constants";

export default function Page() {
  const dataSource = useAppStore((state) => state.dataSource);
  const selectedChain = useAppStore((state) => state.selectedChain);
  const [value, setValue] = useState("");
  const setDataSource = useAppStore((state) => state.setDataSource);
  const [chainName, setChainName] = useState(selectedChain);
  const changeChain = useAppStore((state) => state.changeSelectedChain);
  const handleAlert = useAppStore((state) => state.handleAlert);
  return (
    <Layout>
      <Divider mb="0.25" />
      <Container styles={{ width: "600px" }}>
        <Box
          styles={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Title>Configure Data Source</Title>
          <Select
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              handleAlert("change data source to:" + e.target.value, "warning");
              setDataSource(e.target.value);
            }}
          >
            <SelectOption value={dataSource}>
              {dataSource || " Select Data Source: "}
            </SelectOption>
            <SelectOption value={dataSources[0]}>{dataSources[0]}</SelectOption>
            <SelectOption value={dataSources[1]}>{dataSources[1]}</SelectOption>
          </Select>
        </Box>
        <Box
          styles={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Title>Configure Default Chain</Title>
          <Select
            value={chainName}
            onChange={(e) => {
              setChainName(e.target.value);
              handleAlert("change chain to:" + e.target.value, "warning");
              changeChain(e.target.value);
            }}
          >
            <SelectOption value={chainName}>
              {chainName || " Select Default Chain:"}
            </SelectOption>
            {chainNames.map((name: string) => (
              <SelectOption value={name} key={name}>
                {name}
              </SelectOption>
            ))}
          </Select>
        </Box>
      </Container>
    </Layout>
  );
}
