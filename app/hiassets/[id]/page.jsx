"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { ArrowLongLeftIcon, TrashIcon } from "@heroicons/react/24/solid";
import AssetsDashboard from "@/app/_components/AssetsDashboard";
import delete_item from "@/app/_lib/delete_item";

import Spinner from "@/app/_components/Spinner";
// import delete_item from "@/app/_lib/delete_item";
import { getAssetsList } from "@/app/_lib/data-service";
import { revalidatePath } from "next/cache";

const Page = () => {
  const { id } = useParams(); // Ensure the parameter name matches your route
  const [equipmentData, setEquipmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  console.log("Route Parameters:", { id });

  useEffect(() => {
    if (!id) {
      console.error("ID is missing in the route parameters");
      setLoading(false);
      return;
    }

    const fetchEquipmentData = async () => {
      try {
        const data = await getAssetsList(id);
        setEquipmentData(data);
      } catch (error) {
        console.error("Error fetching asset data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipmentData();
  }, [id]);

  if (loading) return <Spinner loading={loading} />;
  if (!equipmentData) return <h1 className="mt-10 text-2xl font-bold text-center">Equipment Data Not Found</h1>;


  const handleDelete = () => {
    // if (confirm("Are you sure you want to delete this record?")) {
    //   startTransition(async () => {
    //     try {
    //       await delete_item(equipmentData);
    //       alert("Item deleted successfully!");
    //       revalidatePath("/hiassets");
    //     } catch (error) {
    //       alert("Error deleting item. Please try again.");
    //     }
    //   });
    // }
  };

  return (
    <>
      <div className="flex flex-row justify-between mb-2">
        <Link href="/hiassets" className="flex items-center text-2xl font-semibold text-primary-300">
          <ArrowLongLeftIcon className="w-6 h-6 mr-2" /> Back to Assets
        </Link>
        <button
          title="Delete Item"
          // onClick={handleDelete}
          disabled={isPending}
          className="flex items-center text-2xl font-semibold text-primary-300"
        >
          <TrashIcon className="w-5 h-5 mt-2 text-primary-600" />
        </button>
      </div>
      <AssetsDashboard equipmentData={equipmentData} />
    </>
  );
};

export default Page;
