import { useState, useEffect } from "react";
import { format } from "date-fns";
import { addAsset, editAsset } from "@/app/_lib/data-service";
import Image from "next/image";

const AssetsForm = ({ equipment, categories, locations, edit }) => {
  const [urls, setUrls] = useState({
    image: "",
    invoice: "",
    instructions: "",
  });
  
  const formatNumber = (value) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  const asset = edit && equipment ? equipment[0] : null;
  useEffect(() => {
    if (edit && equipment) {
      setUrls({
        image: asset.card_image ? `/uploads/images/${asset.card_image}` : "",
        invoice: asset.finance_purchase_invoice
          ? `/uploads/invoices/${asset.finance_purchase_invoice}`
          : "",
        instructions: asset.technical_instructions
          ? `/uploads/instructions/${asset.technical_instructions}`
          : "",
      });
    }
  }, [edit, equipment]);

  const initialFormData =
    edit && equipment
      ? {
          selcode: asset.selcode ?? "",
          card_model: asset.card_model ?? "",
          card_description: asset.card_description ?? "",
          card_image: asset.card_image ?? "",
          technical_category:
            asset.technical_category ?? categories?.[0]?.description ?? "",
          technical_location:
            asset.technical_location ?? locations?.[0]?.description ?? "",
          technical_maker_name: asset.technical_maker_name ?? "",
          technical_maker_web: asset.technical_maker_web ?? "",
          technical_model_number: asset.technical_model_number ?? "",
          technical_serial_number: asset.technical_serial_number ?? "",
          technical_instructions: asset.technical_instructions ?? "",
          finance_purchase_date: asset.finance_purchase_date ?? "",
          finance_purchase_location: asset.finance_purchase_location ?? "",
          finance_purchase_amount: asset.finance_purchase_amount ?? "",
          finance_purchase_note: asset.finance_purchase_note ?? "",
          finance_purchase_invoice: asset.finance_purchase_invoice ?? "",
          finance_disposal_date: asset.finance_disposal_date ?? "1990-01-01",
          finance_disposal_amount: asset.finance_disposal_amount ?? "0.00",
          finance_disposal_note: asset.finance_disposal_note ?? "",
          is_active: asset.is_active ?? "",
          admin_creation_date: asset.admin_creation_date ?? "",
          admin_creation_user: asset.admin_creation_user ?? "",
          admin_update_date: asset.admin_update_date ?? "",
          admin_update_user: asset.admin_update_user ?? "",
        }
      : {
          selcode: "",
          card_model: "",
          card_description: "",
          card_image: "",
          technical_category: categories?.[0]?.description ?? "",
          technical_location: locations?.[0]?.description ?? "",
          technical_maker_name: "",
          technical_maker_web: "",
          technical_model_number: "",
          technical_serial_number: "",
          technical_instructions: "",
          finance_purchase_date: "",
          finance_purchase_location: "",
          finance_purchase_amount: "",
          finance_purchase_note: "",
          finance_purchase_invoice: "",
          finance_disposal_date: "1990-01-01",
          finance_disposal_amount: "0.00",
          finance_disposal_note: "",
          is_active: "",
          admin_creation_date: "",
          admin_creation_user: "",
          admin_update_date: "",
          admin_update_user: "",
        };

  const [formData, setFormData] = useState(initialFormData);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // List of numeric fields that require special handling
    const numericFields = [
      "finance_purchase_amount",
      "finance_disposal_amount",
    ];

    // Check if the field is a numeric field
    if (numericFields.includes(name)) {
      // Remove commas and parse the value to a number
      const numericValue = parseFloat(value.replace(/,/g, ""));
      const isValid = !isNaN(numericValue) && numericValue >= 0; // Ensure non-negative
      // Update the state with the numeric value (or empty string if NaN)
      setFormData((prev) => ({
        ...prev,
        [name]: isValid ? numericValue : "",
      }));
    } else {
      // Default handling for other fields
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <div className="flex items-center justify-center py-3">
        <div className="w-full mx-auto bg-primary-800">
          <div className="px-8 pt-6 pb-4 border-b-4 border-primary-700 ">
            <h1 className="text-4xl font-semibold text-primary-500">
              {edit ? "Edit Asset" : "Add New Asset"}
            </h1>
          </div>
          <form
            className="px-8 pb-6"
            action={edit ? editAsset : addAsset}
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid grid-cols-12 gap-2 pt-4 mb-5">
              <div>
                <label
                  htmlFor="selcode"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Code
                </label>
                <input
                  type="text"
                  name="selcode"
                  id="selcode"
                  placeholder="xxxx"
                  value={formData.selcode}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="technical_category"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Category
                </label>
                <select
                  name="technical_category"
                  id="technical_category"
                  required
                  value={formData.technical_category}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 text-base font-medium border rounded-md border-primary-200 bg-primary-100 text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                >
                  {categories && categories.length > 0 ? (
                    categories.map((category, index) => (
                      <option key={index} value={category.description}>
                        {category.description}
                      </option>
                    ))
                  ) : (
                    <option value="">Loading...</option>
                  )}
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="technical_location"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Location
                </label>
                <select
                  name="technical_location"
                  id="technical_location"
                  required
                  value={formData.technical_location}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 text-base font-medium border rounded-md border-primary-200 bg-primary-100 text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                >
                  {locations && locations.length > 0 ? (
                    locations.map((location, index) => (
                      <option key={index} value={location.description}>
                        {location.description}
                      </option>
                    ))
                  ) : (
                    <option value="">Loading...</option>
                  )}
                </select>
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="card_description"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="card_description"
                  id="card_description"
                  required
                  value={formData.card_description}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="technical_maker_name"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Maker
                </label>
                <input
                  type="text"
                  name="technical_maker_name"
                  id="technical_maker_name"
                  required
                  value={formData.technical_maker_name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="card_model"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Model
                </label>
                <input
                  type="text"
                  name="card_model"
                  id="card_model"
                  required
                  value={formData.card_model}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 mb-5 ">
              <div className="col-span-2">
                <label
                  htmlFor="technical_model_number"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Model No.
                </label>
                <input
                  type="text"
                  name="technical_model_number"
                  id="technical_model_number"
                  required
                  value={formData.technical_model_number}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="technical_serial_number"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Serial No.
                </label>
                <input
                  type="text"
                  name="technical_serial_number"
                  id="technical_serial_number"
                  required
                  value={formData.technical_serial_number}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="finance_purchase_date"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Purchase Date
                </label>
                <input
                  type="date"
                  name="finance_purchase_date"
                  id="finance_purchase_date"
                  value={
                    edit
                      ? format(
                          new Date(formData.finance_purchase_date),
                          "yyyy-MM-dd"
                        )
                      : formData.finance_purchase_date
                  }
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="finance_purchase_amount"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  $ Purchase Price
                </label>
                <input
                  type="number"
                  step="0.10"
                  min="0.00"
                  name="finance_purchase_amount"
                  id="finance_purchase_amount"
                  required
                  value={
                    formData.finance_purchase_amount === ""
                      ? ""
                      : formData.finance_purchase_amount
                  }
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>

              <div className="col-span-4">
                <label
                  htmlFor="finance_purchase_note"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Purchase Note
                </label>
                <input
                  type="text"
                  name="finance_purchase_note"
                  id="finance_purchase_note"
                  required
                  value={formData.finance_purchase_note}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
            </div>
            <div className="grid grid-cols-9 gap-2 mb-5 ">
              <div className="col-span-3">
                <label
                  htmlFor="finance_purchase_location"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Merchant
                </label>
                <input
                  type="text"
                  name="finance_purchase_location"
                  id="finance_purchase_location"
                  required
                  value={formData.finance_purchase_location}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-4">
                <label
                  htmlFor="technical_maker_web"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Maker URL
                </label>
                <input
                  type="url"
                  name="technical_maker_web"
                  id="technical_maker_web"
                  value={formData.technical_maker_web}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="is_active"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Status
                </label>
                <select
                  id="is_active"
                  name="is_active"
                  value={formData.is_active}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 text-base font-medium border rounded-md border-primary-200 bg-primary-100 text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                >
                  <option value="true" className="text-centre">
                    Active
                  </option>
                  <option value="false" className="text-left">
                    Inactive
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2 mb-5 ">
              <div className="col-span-3">
                <label
                  htmlFor="finance_disposal_date"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Disposal Date
                </label>
                <input
                  type="date"
                  name="finance_disposal_date"
                  // defaultValue={"1990-01-01"}
                  id="finance_disposal_date"
                  value={format(
                    new Date(formData.finance_disposal_date),
                    "yyyy-MM-dd"
                  )}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="finance_disposal_amount"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  $ Disposal Amount
                </label>
                <input
                  type="number"
                  step="0.10"
                  min="0.00"
                  name="finance_disposal_amount"
                  id="finance_disposal_amount"
                  value={
                    formData.finance_disposal_amount === ""
                      ? ""
                      : formData.finance_disposal_amount
                  }
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="finance_disposal_note"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Disposal Note
                </label>
                <input
                  type="text"
                  name="finance_disposal_note"
                  id="finance_disposal_note"
                  value={formData.finance_disposal_note}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 mb-5 ">
              <div className="col-span-4">
                <label
                  htmlFor="image"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Select Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  required={!edit}
                  className="w-full text-base font-semibold text-primary-800 bg-primary-100 border rounded cursor-pointer file:cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-primary-100 file:hover:bg-primary-200 file:text-primary-900"
                />
                {formData.card_image && (
                  <p className="mt-2 text-sm text-primary-200">
                    Current file: {formData.card_image}
                  </p>
                )}
                <input
                  type="hidden"
                  name="image_reference"
                  value={formData.card_image}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-4">
                <label
                  htmlFor="invoice"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Select Invoice
                </label>
                <input
                  type="file"
                  name="invoice"
                  id="invoice"
                  className="w-full text-base font-semibold text-primary-800 bg-primary-100 border rounded cursor-pointer file:cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-primary-100 file:hover:bg-primary-200 file:text-primary-900"
                />
                {formData.finance_purchase_invoice && (
                  <p className="mt-2 text-sm text-primary-200">
                    Current file: {formData.finance_purchase_invoice}
                  </p>
                )}
                <input
                  type="hidden"
                  name="invoice_reference"
                  value={formData.finance_purchase_invoice}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
              <div className="col-span-4">
                <label
                  htmlFor="instructions"
                  className="block mb-3 text-base font-medium text-primary-300"
                >
                  Select Instructions
                </label>
                <input
                  type="file"
                  name="instructions"
                  id="instructions"
                  placeholder="MT"
                  className="w-full text-base font-semibold text-primary-800 bg-primary-100 border rounded cursor-pointer file:cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-primary-100 file:hover:bg-primary-200 file:text-primary-900"
                />
                {formData.technical_instructions && (
                  <p className="mt-2 text-sm text-primary-200">
                    Current file: {formData.technical_instructions}
                  </p>
                )}
                <input
                  type="hidden"
                  name="instructions_reference"
                  value={formData.technical_instructions}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-primary-200 bg-primary-100 py-2.5 px-6 text-base font-medium text-primary-900 focus:ring focus:ring-opacity-50 disabled:opacity-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2 mb-5 ">
              <div className="col-span-2"></div>
              <div className="col-span-2"></div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 font-semibold transition-all rounded-md bg-primary-700 text-primary-100 hover:bg-gray-500 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
              >
                {edit ? "Update Asset" : "Add Asset"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {edit && urls.image.length > 0 && (
        <div className="flex flex-row p-6 px-12 py-8 justify-evenly space-x-7 max-h-96 bg-primary-800">
          <Image
            src={urls.image}
            name="image_reference"
            alt="Asset Image"
            height={0}
            width={0}
            sizes="100vw"
            className="w-1/6 h-auto rounded-t-xl"
          />
          <a href={urls.invoice} name='invoice_reference' target="_blank" rel="noopener noreferrer">
            View Invoice
          </a>
          <a href={urls.instructions} name="instructions_reference" target="_blank" rel="noopener noreferrer">
            View Instructions
          </a>
        </div>
        
      )}{" "}
    </>
  );
};

export default AssetsForm;
