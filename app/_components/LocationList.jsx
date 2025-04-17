// import LocationGrid from "@/app/_components/LocationGrid";
// import connectDB from "@/app/_config/database";
// import LocationCategories from "@/app/_models/HI_Locations";

// async function LocationList() {
//   await connectDB();
//   const categories = await LocationCategories.find({}).sort({ code: 1 }).lean();

//   const categoriesData = categories.map((category) => ({
//     ...category,
//     _id: category._id.toString(),
//   }));

//   return (
//     <div>
//       {categoriesData.length === 0 ? (
//         <h1 className="mb-5 text-3xl font-medium text-primary-500">
//           You don&apos;t have any asset locations recorded yet.
//         </h1>
//       ) : (
//         <LocationGrid rowData={categoriesData} />
//       )}
//     </div>
//   );
// }

// export default LocationList;

import LocationGrid from "@/app/_components/LocationGrid";
import { getLocations } from "@/app/_lib/data-service";

async function LocationList() {
  const locationData = await getLocations();

  return (
    <div>
      {locationData.length === 0 ? (
        <h1 className="mb-5 text-3xl font-medium text-primary-500">
          You don&apos;t have any asset locations yet.
        </h1>
      ) : (
        <LocationGrid rowData={locationData} />
      )}
    </div>
  );
}

export default LocationList;
