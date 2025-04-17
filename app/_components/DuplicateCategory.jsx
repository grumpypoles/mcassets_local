"use client";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";

import { useTransition } from "react";
import SpinnerMini from "@/app/_components/SpinnerMini";
import { duplicateCategory } from "@/app/_lib/data-service";

function DuplicateCategory({ copiedRow }) {
  const [isPending, startTransition] = useTransition();

  function handleDuplicate() {
    if (confirm("Are you sure you want to duplicate this record?"))
      startTransition(() => duplicateCategory(copiedRow));
    
  }

  return (
    <button
      onClick={handleDuplicate}
      className="flex items-center flex-grow gap-2 px-3 text-xs font-bold uppercase transition-colors group text-primary-300"
    >
      {!isPending ? (
        <>
          <DocumentDuplicateIcon className="w-5 h-5 mt-2 transition-colors text-primary-600 group-hover:text-primary-100" />
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DuplicateCategory;
