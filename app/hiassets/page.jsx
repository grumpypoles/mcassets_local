import AssetsList from "@/app/_components/AssetsList";
import Spinner from "@/app/_components/Spinner";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Assets",
};

export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-2 text-4xl font-medium text-primary-500">
        Our Assets
      </h1>
      <div className="mb-4 text-lg text-primary-200">
        

        <div className="flex justify-end mt-2">
          <Link
            href={`/hiassets/add`}
            className="flex items-center mb-2 text-2xl font-semibold text-primary-300"
          >
            <span className="flex flex-row justify-end w-full mt-2 text-xl font-medium gap-x-2">
              Add
              <ArrowRightIcon className="w-6 h-6 mr-2" />
            </span>
          </Link>
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <AssetsList />
      </Suspense>
    </div>
  );
}
