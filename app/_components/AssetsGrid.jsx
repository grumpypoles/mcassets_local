"use client";

import AssetsDetails from "@/app/_components/AssetsDetails";
import AssetsEdit from "@/app/_components/AssetsEdit";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";

const DetailRowRenderer = (params) => <AssetsDetails copiedRow={params.data} />;
const EditRowRenderer = (params) => <AssetsEdit copiedRow={params.data} />;

const ImageCellRenderer = (params) => {
  const imageUrl = `/uploads/images/${params.value}`;
  return params.value ? (
    <img src={imageUrl} alt="Asset" style={{ width: "50px", height: "auto" }} />
  ) : null;
};

const AssetsGrid = ({ rowData }) => {
  const defaultColDef = useMemo(() => ({ flex: 1, editable: false }), []);

  const colDefs = useMemo(
    () => [
      { field: "selcode", headerName: "Code", filter: true },
      { field: "card_description", headerName: "Description", minWidth: 200, filter: true },
      { field: "card_model", headerName: "Model", minWidth: 200, filter: true },
      { field: "technical_location", headerName: "Location", minWidth: 200, filter: true },
      { field: "technical_category", headerName: "Category", filter: true },
      { field: "status", headerName: "Status", filter: true },
      {
        field: "card_image",
        headerName: "Image",
        maxWidth: 100,
        cellRenderer: ImageCellRenderer,
        autoHeight: true,
      },
      {
        headerName: "Details",
        maxWidth: 125,
        cellRenderer: DetailRowRenderer,
      },
      {
        headerName: "Edit",
        maxWidth: 125,
        cellRenderer: EditRowRenderer,
      },
    ],
    []
  );

  return (
    <div className="ag-theme-quartz-dark" style={{ height: 525 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 30, 50, 100]}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default AssetsGrid;
