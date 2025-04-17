import Image from "next/image";
import about1 from "@/public/hi_assets.jpg";
import Link from "next/link";

//will refresh the cache once a day and provide update number of cabins
// export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  return (
    <div className="grid items-center grid-cols-5 text-lg gap-x-24 gap-y-32">
      <div className="relative col-span-2 aspect-square">
        <Image
          src={about1}
          placeholder="blur"
          quality={100}
          className="object-cover"
          fill
          alt="Windsurfing at Lyall Bay, Wellington, New Zealand"
        />
      </div>

      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-primary-500">
          Welcome to McAssets App
        </h1>

        <div className="space-y-8">
          <p>
            Welcome to McAssets, the ultimate app designed to help us
            efficiently manage and track our valuable assets. Whether we&apos;re
            organizing personal belongings, professional equipment, or
            specialized gear, McAssets offers an intuitive way to catalog and
            monitor everything in one place. From logging key details about each
            item to maintaining records of usage, maintenance, and location,
            this app ensures we have a comprehensive view of our assets at our
            fingertips. McAssets empowers us to build a detailed inventory,
            track asset performance, and make informed decisions for future
            management. Whether we&apos;re safeguarding personal collections or
            optimizing professional resources, McAssets is here to simplify and
            enhance the way we handle our assets.
          </p>

          <div>
            <Link
              href="/hiassets"
              className="px-8 py-6 text-lg font-semibold transition-all rounded-md bg-primary-500 text-primary-100 hover:bg-stone-600"
            >
              Assets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
