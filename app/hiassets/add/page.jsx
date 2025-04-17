"use client";

import AssetsForm from "@/app/_components/AssetsForm";
import Spinner from "@/app/_components/Spinner";
import { getCategories, getLocations } from "@/app/_lib/data-service";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryData, locationData] = await Promise.all([
          getCategories(),
          getLocations(),
        ]);

        setCategories(categoryData);
        setLocations(locationData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!categories || !locations) {
    return (
      <h1 className="mt-10 text-2xl font-bold text-center">
        Equipment Data Not Found
      </h1>
    );
  }

  return (
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
        equipment={null}
        edit={null}
        categories={categories}
        locations={locations}
      />
    </>
  );
};

export default Page;