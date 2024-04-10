import { Layout, Divider, AssetList, MainLayout } from "@/components";
import { BlockProps } from "@/components";

export default function Home(props: BlockProps) {
  return (
    <MainLayout>
      <Layout theme={props.theme}>
        <Divider mb="0.25" />
        <AssetList />
      </Layout>
    </MainLayout>
  );
}
