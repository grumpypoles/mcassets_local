"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import Spinner from "@/app/_components/Spinner";
import AssetsForm from "@/app/_components/AssetsForm";
import { getAssetsList, getCategories, getLocations } from "@/app/_lib/data-service";

const Page = () => {
  const { id } = useParams();
  
  const [equipmentData, setEquipmentData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const [equipment, categoryData, locationData] = await Promise.all([
          getAssetsList(id),
          getCategories(),
          getLocations(),
        ]);

        setEquipmentData(equipment);
        setCategories(categoryData);
        setLocations(locationData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (!equipmentData && !loading) {
    return (
      <h1 className="mt-10 text-2xl font-bold text-center">
        Equipment Data Not Found
      </h1>
    );
  }

  return (
    <>
      {loading && <Spinner />}
      {!loading && equipmentData && (
        <>
          <Link
            href="/hiassets"
            className="flex items-center mb-4 text-2xl font-semibold text-primary-300"
          >
            <span className="flex flex-row items-center w-full text-xl font-medium gap-x-2">
              <ArrowLongLeftIcon className="w-6 h-6 mr-2" /> Back to Assets
            </span>
          </Link>

          <AssetsForm
            equipment={equipmentData}
            categories={categories}
            locations={locations}
            edit={"edit"}
          />
        </>
      )}
    </>
  );
};

export default Page;
