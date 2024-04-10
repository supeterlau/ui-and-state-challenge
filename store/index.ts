import { create } from "zustand";
import {
  Asset,
  AssetList,
} from "@chain-registry/client/node_modules/@chain-registry/types/types/assets";
import { Chain } from "@chain-registry/types";

interface AppState {
  isModalOpen: boolean;
  toggleModalOpen: () => void;
  modalChild: string;
  setModalChild: (childName: string) => void;
  isShowAlert: boolean;
  showAlert: () => void;
  hideAlert: () => void;
  alertMessage: string;
  setAlertMessage: (message: string) => void;
  alertLabel: string;
  setAlertLabel: (label: string) => void;
  handleAlert: (message: string, label?: string) => void;
  assetList: Asset[];
  addAssetList: (asset: Asset) => void;
  selectedChain: string;
  changeSelectedChain: (chainName: string) => void;
  addAssets: (assets: Asset[]) => void;
  dataSource: string;
  setDataSource: (dataSource: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isModalOpen: false,
  toggleModalOpen: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  modalChild: "addAsset",
  setModalChild: (childName: string) => set(() => ({ modalChild: childName })),
  isShowAlert: false,
  showAlert: () => set(() => ({ isShowAlert: true })),
  hideAlert: () => set(() => ({ isShowAlert: false })),
  alertMessage: "",
  setAlertMessage: (message: string) => set(() => ({ alertMessage: message })),
  alertLabel: "info",
  setAlertLabel: (label: string) => set(() => ({ alertLabel: label })),
  handleAlert: (message: string, label = "info") =>
    set(() => ({
      alertMessage: message,
      alertLabel: label,
      isShowAlert: true,
    })),
  assetList: [],
  addAssetList: (newAsset: Asset) =>
    set((state: AppState) => ({ assetList: [newAsset, ...state.assetList] })),
  selectedChain: "osmosis",
  changeSelectedChain: (newChain: string) =>
    set(() => ({ selectedChain: newChain })),
  addAssets: (assets: Asset[]) =>
    set((state: AppState) => ({ assetList: [...assets, ...state.assetList] })),
  // dataSource: "",
  // dataSource: "chain-registry",
  dataSource: "@chain-registry/client",
  setDataSource: (newDataSource: string) =>
    set(() => ({ dataSource: newDataSource })),
}));
