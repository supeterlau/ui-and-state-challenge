import { Layout, Divider, AssetList, MainLayout } from "@/components";

export default function Home() {
  return (
    <MainLayout>
      <Layout>
        <Divider mb="0.25" />
        <AssetList />
      </Layout>
    </MainLayout>
  );
}
