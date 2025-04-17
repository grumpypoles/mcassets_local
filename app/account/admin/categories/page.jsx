import Image from "next/image";
import sideImage from "@/public/hi_categories.jpg";
import CategoryList from "@/app/_components/CategoryList";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
  title: "Categories",
};

export default async function Page() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold text-primary-500">
        List of assets categories
      </h2>

      {/* <p className="mb-8 text-lg text-primary-200">
        In our windsurfing activities, we are utilizing the following equipment.
      </p> */}
      <div className="grid grid-cols-[3fr_2fr] gap-2  py-3 mb-12 relative">
        <div>
          <Suspense fallback={<Spinner />}>
            <CategoryList />
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
            alt="WS Shop"
            placeholder="blur"
            quality={80}
          />
        </div>
      </div>
    </>
  );
}
