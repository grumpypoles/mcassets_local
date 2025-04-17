import Image from "next/image";
import sideImage from "@/public/hi_plans.jpg";
// import DisciplineList from "@/app/_components/DisciplineList";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import LocationList from "@/app/_components/LocationList";

export const metadata = {
  title: "Disciplines",
};

export default async function Page() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold text-primary-500">
        List of assets locations
      </h2>

      <div className="grid grid-cols-[3fr_2fr] gap-2  py-3 mb-12 relative">
        <div>
          <Suspense fallback={<Spinner />}>
          <LocationList />
          
          </Suspense>
        </div>
        <div className="relative -translate-x-3 h-100vw aspect-auto">
          <Image
            src={sideImage}
            fill
            height={0}
            width={0}
            sizes="100vw"
            className="object-cover object-top"
            alt="House plans"
            placeholder="blur"
            quality={80}
          />
        </div>
      </div>
    </>
  );
}
