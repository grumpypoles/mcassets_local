"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter({type}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("status") ?? "active";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("status", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex border border-primary-800">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All {type}
      </Button>
      <Button
        filter="active"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
       Active
      </Button>
      <Button
        filter="inactive"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Inactive
      </Button>

    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
