// "use client";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

function AssetsEdit({ copiedRow }) {
  return (
    <Link
      href={`/hiassets/${copiedRow.id}/edit`}
      className="flex items-center mb-4 text-2xl font-semibold text-primary-300"
    >
      {" "}
      <span className="flex flex-row items-center w-full text-xl font-medium gap-x-2">
        <button className="flex items-center flex-grow gap-2 px-3 text-xs font-bold uppercase transition-colors group text-primary-300">
          <>
            <DocumentDuplicateIcon className="w-5 h-5 mt-2 transition-colors text-primary-600 group-hover:text-primary-100" />
          </>
        </button>
      </span>
    </Link>
  );
}

export default AssetsEdit;
