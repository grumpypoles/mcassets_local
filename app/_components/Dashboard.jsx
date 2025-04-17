"use client";

import EquipmentHeaderImage from "@/app/_components/EquipmentHeaderImage";
import EquipmentHeader from "@/app/_components/EquipmentHeader";
import EquipmentFinance from "@/app/_components/EquipmentFinance";
import EquipmentTechnical from "@/app/_components/EquipmentTechnical";
import EquipmentInvoice from "@/app/_components/EquipmentInvoice";

function DashboardComponent({ mastData }) {
  return (
    <div className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900">
      <EquipmentHeader eqData={mastData} />
      <EquipmentHeaderImage mast={mastData} />
      <div className="grid grid-cols-2 gap-6 px-12 py-8 text-lg bg-primary-900">
        <EquipmentFinance type={"Mast"} eqData={mastData} />
        <EquipmentTechnical type={"Mast"} eqData={mastData} />
      </div>
      <EquipmentInvoice mast={mastData} />
    </div>
  );
}
export default DashboardComponent;
