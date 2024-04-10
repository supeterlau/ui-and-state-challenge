import { ChainRegistryClient } from "@chain-registry/client";
import { AssetList } from "@chain-registry/client/node_modules/@chain-registry/types/types/assets";
import { Chain } from "@chain-registry/types";

import { assets, chains } from "chain-registry";

const chainNames = ["osmosis", "juno", "stargaze"];

export class RegistryClientProvider {
  chainNames: string[];
  client: ChainRegistryClient;

  constructor(chainNames: string[]) {
    this.chainNames = chainNames;
    this.client = new ChainRegistryClient({
      chainNames,
    });
  }

  async init() {
    await this.client.fetchUrls();
  }

  getChain(chainName: string): Chain {
    return this.client.getChain(chainName);
  }

  getAssetList(chainName: string): AssetList {
    return this.client.getChainAssetList(chainName);
  }
}

export class RegistryProvider {
  chainNames: string[];

  constructor(chainNames: string[]) {
    this.chainNames = chainNames;
  }

  init() {}

  getChain(chainName: string): Chain {
    const chain = chains.find(
      ({ chain_name }) => chain_name === chainName
    ) as Chain;
    return chain;
  }

  getAssetList(chainName: string): AssetList {
    const assetList = assets.find(
      ({ chain_name }) => chain_name === chainName
    ) as AssetList;
    return assetList;
  }
}

export const providers = {
  "chain-registry": RegistryProvider,
  "@chain-registry/client": RegistryClientProvider,
};
