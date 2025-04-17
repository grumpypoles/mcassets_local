import { CameraIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

function AssetsDetails({ copiedRow }) {

 

// Ensure copiedRow and copiedRow.id exist
if (!copiedRow || !copiedRow.id) {
  return null; // Handle the case where copiedRow is not passed
}




  return (

    
    <Link
      href={`/hiassets/${copiedRow.id}`}
      className="flex items-center mb-4 text-2xl font-semibold text-primary-300"
    >
      {" "}
      <span className="flex flex-row items-center w-full text-xl font-medium gap-x-2">
        <button className="flex items-center flex-grow gap-2 px-3 text-xs font-bold uppercase transition-colors group text-primary-300">
          <>
            <CameraIcon className="w-5 h-5 mt-2 transition-colors text-primary-600 group-hover:text-primary-100" />
          </>
        </button>
      </span>
    </Link>
  );
}

export default AssetsDetails;
