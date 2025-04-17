import AssetsGrid from "@/app/_components/AssetsGrid";
import { auth } from "@/app/_lib/auth";
import { getAssets } from "@/app/_lib/data-service";

export default async function AssetsList() {
  const session = await auth();
  if (!session) {
    return <h1 className="mb-5 text-3xl font-medium text-red-500">You need to log in to view your assets.</h1>;
  }

  const assetData = await getAssets();

  return (
    <div>
      {assetData.length === 0 ? (
        <h1 className="mb-5 text-3xl font-medium text-primary-500">
          You don&apos;t have any assets yet.
        </h1>
      ) : (
        <AssetsGrid rowData={assetData} />
      )}
    </div>
  );
}
