export const getYear = (date) => {
  const newDate = new Date(date);
  return newDate.getFullYear();
};

export const getMonthAbbreviation = (date) => {
  const month = new Date(date);
  return month.toLocaleString("default", { month: "short" });
};

export function buildAssetsData(
  formData,
  imageFile,
  instructionsFile,
  invoiceFile,
  appUserId,
  action
) {
  const data = {
    ...(action === "add" && {
      selcode: formData.get("selcode") || "",
      admin_creation_date: new Date().toISOString(),
      admin_creation_user: appUserId,
    }),
    ...(action === "edit" && {
      admin_update_date: new Date().toISOString(),
      admin_update_user: appUserId,
    }),

    card_description: formData.get("card_description") || "",
    card_model: formData.get("card_model") || "",
    card_image: imageFile.name || null,
    technical_category: formData.get("technical_category") || "",
    technical_location: formData.get("technical_location") || "",
    technical_maker_web: formData.get("technical_maker_web") || "",
    technical_maker_name: formData.get("technical_maker_name") || "",
    technical_instructions: instructionsFile.name || null,
    technical_model_number: formData.get("technical_model_number") || "",
    technical_serial_number: formData.get("technical_serial_number") || "",
    finance_purchase_date: formData.get("finance_purchase_date") || "",
    finance_purchase_location: formData.get("finance_purchase_location") || "",
    finance_purchase_amount: formData.get("finance_purchase_amount") || "",
    finance_purchase_invoice: invoiceFile.name || null,
    finance_purchase_note: formData.get("finance_purchase_note") || "",
    finance_disposal_date: formData.get("finance_disposal_date") || "",
    finance_disposal_amount: formData.get("finance_disposal_amount") || "",
    finance_disposal_note: formData.get("finance_disposal_note") || "",
    status: formData.get("is_active") || "",
   
  };

  return data;
}
