

import AssetsFinance from "@/app/_components/AssetsFinance";
import AssetsHeader from "@/app/_components/AssetsHeader";
import AssetsHeaderImage from "@/app/_components/AssetsHeaderImage";
import AssetsTechnical from "@/app/_components/AssetsTechnical";

function AssetsDashboard({ equipmentData }) {
 
  return (
    <div className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900">
      <AssetsHeader eqData={equipmentData}/>
      <AssetsHeaderImage eqData={equipmentData}/>
      <div className="grid grid-cols-2 gap-6 px-12 py-8 text-lg bg-primary-900">
      <AssetsFinance eqData={equipmentData}/>
      <AssetsTechnical eqData={equipmentData}/>
      </div>
     
    </div>
  );
}
export default AssetsDashboard
