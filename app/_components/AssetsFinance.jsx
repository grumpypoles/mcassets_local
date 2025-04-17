import { CalculatorIcon, KeyIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import Link from "next/link";

const AssetsFinance = ({ eqData }) => {
  if (!eqData || eqData.length === 0) {
    return <p className="text-red-500">No financial data available.</p>;
  }

  const asset = eqData[0];

  // Check if invoice data exists
  const pdf_urls = asset.finance_purchase_invoice
    ? `/uploads/invoices/${encodeURIComponent(asset.finance_purchase_invoice)}`
    : `/uploads/invoices/0000 Missing Invoice.pdf`;

  return (
    <div className="flex flex-col items-center justify-top text-primary-800 bg-primary-200">
      <span className="flex flex-row items-center w-full p-4 mb-4 text-2xl font-bold gap-x-2 bg-primary-400">
        <CalculatorIcon className="w-10 h-10" /> Financial Data
      </span>

      <div>
        <ul>
          <li>
            <span className="flex flex-row items-center w-full text-xl font-medium gap-x-2">
              <KeyIcon className="w-6 h-6" /> Purchase Date:{" "}
              {asset.finance_purchase_date
                ? format(new Date(asset.finance_purchase_date), "dd-MMM-yyyy")
                : "N/A"}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center w-full text-xl font-medium gap-x-2">
              <KeyIcon className="w-6 h-6" /> Merchant: {asset.finance_purchase_location || "N/A"}
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center w-full text-lg font-medium gap-x-2">
              <KeyIcon className="w-6 h-6" /> Retail Price:{" "}
              {asset.finance_purchase_amount
                ? new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "NZD",
                  }).format(asset.finance_purchase_amount)
                : "N/A"}
            </span>
          </li>

          {asset.finance_purchase_note && (
            <li>
              <span className="flex flex-row items-center w-full text-xl font-medium gap-x-2">
                <KeyIcon className="w-6 h-6" /> Purchase Note: {asset.finance_purchase_note}
              </span>
            </li>
          )}

          {asset.status !== "Active" && asset.finance_disposal_date && (
            <li>
              <span className="flex flex-row items-center w-full text-xl font-medium gap-x-2">
                <KeyIcon className="w-6 h-6" /> Disposal Date:{" "}
                {format(new Date(asset.finance_disposal_date), "dd-MMM-yyyy")}
              </span>
            </li>
          )}

          {asset.status !== "Active" && asset.finance_disposal_note && (
            <li>
              <span className="flex flex-row items-center w-full text-xl font-medium gap-x-2">
                <KeyIcon className="w-6 h-6" /> Disposal Method: {asset.finance_disposal_note}
              </span>
            </li>
          )}

          {asset.status !== "Active" && asset.finance_disposal_amount && (
            <li>
              <span className="flex flex-row items-center w-full text-xl font-medium gap-x-2">
                <KeyIcon className="w-6 h-6" /> Disposal Revenue:{" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "NZD",
                }).format(asset.finance_disposal_amount)}
              </span>
            </li>
          )}

          <li>
            <span className="flex flex-row items-center w-full mb-10 text-xl font-medium gap-x-2">
              <a
                href={pdf_urls}
                className="flex flex-row items-center w-full text-xl font-medium gap-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <KeyIcon className="w-6 h-6" />
                Invoice: <span style={{ textDecoration: 'underline' }}>{asset.finance_purchase_invoice || "N/A"}</span>
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AssetsFinance;
