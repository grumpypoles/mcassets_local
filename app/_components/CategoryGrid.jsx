"use client";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from "react";
// import { updateCategory} from "@/app/_lib/mongo_actions";
import { updateCategory} from "@/app/_lib/data-service";
import DuplicateCategory from "@/app/_components/DuplicateCategory";
// import DuplicateCategory from "@/app/_components/DuplicateCategory";


const CopyRow = ({ data }) => (
    <>
      <div className="flex flex-col w-[100px]">
        <DuplicateCategory copiedRow={data} />
      </div>
    </>
  );
  
  

const CategoryGrid = ({ rowData }) => {
  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      editable: true,
    }),
    []
  );

  const [colDefs] = useState([
   
    {
      field: "description",
      headerName: "Description",
      filter: true,
      maxWidth: 500,
    },
     {
      field: "custom",
      headerName: "Copy",
      maxWidth: 80,
      tooltipValueGetter: () => "Copy Row",
      cellRenderer: (params) => <CopyRow data={params.data} />,
    }
  ]);

  const handleCellValueChange = async (params) => {
    try {
      await updateCategory(params.data);
    } catch (error) {
      console.error("Error updating category:", error.message);
    }
  };

  return (
    <div className="ag-theme-quartz-dark" style={{ height: 405 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        tooltipShowDelay={500}
        pagination={true}
        paginationPageSize={7}
        paginationPageSizeSelector={[7, 14, 21]}
        defaultColDef={defaultColDef}
        onCellValueChanged={handleCellValueChange}
      />
    </div>
  );
};

export default CategoryGrid;
