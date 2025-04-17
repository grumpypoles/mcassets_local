"use server";


import { supabase } from "@/app/_lib/supabase";

async function delete_item(eqData) {
  
  const perma_image ="AssetImageMissing.jpg" 
  const perma_invoice = "0000 Missing Invoice.pdf"
  const perma_instruction = "0000 Missing Instruction.pdf"
  
  const dataImage = eqData[0].card_image;
  const dataInvoice = eqData[0].finance_purchase_invoice;
  const dataInstructions = eqData[0].technical_instructions;
  

  let imagesSuccess = true;
  let invoicesSuccess = true;

  // Ensure dataImage is an array
  const imageArray = Array.isArray(dataImage) ? dataImage : [dataImage];

  // Extract image ID from image URLs
  const imageIds = imageArray.map((imageUrl) => {
    const parts = imageUrl.split("/");
    return parts.at(-1).split(".").at(0);
  });

  // Ensure dataImage is an array
  const invoiceArray = Array.isArray(dataInvoice) ? dataInvoice : [dataInvoice];

  // Extract invoice ID from image URLs
  const invoiceIds = invoiceArray.map((imageUrl) => {
    const parts = imageUrl.split("/");
    return parts.at(-1).split(".").at(0);
  });

  //Delete images from Cloudinary
  if (imageIds.length > 0) {
    for (let imageId of imageIds) {
      const imageResult = await cloudinary.uploader.destroy(
        "ws_images/" + imageId
      );
      if (imageResult.result !== "ok") {
        imagesSuccess = false;
        break; // Stop if any image deletion fails
      }
    }
  }

  //Delete invoices from Cloudinary
  if (invoiceIds.length > 0) {
    for (let invoiceId of invoiceIds) {
      const invoiceResult = await cloudinary.uploader.destroy(
        "ws_invoices/" + invoiceId
      );
      if (invoiceResult.result !== "ok") {
        invoicesSuccess = false;
        break; // Stop if any invoice deletion fails
      }
    }
  }

  // Execute deleteItem function only if both image and invoice deletions were successful
  if (imagesSuccess && invoicesSuccess) {
    //Delete from WS_Costs
    const { finError } = await supabase
      .from("ws_costs")
      .delete()
      .eq("selcode", selcode);
    if (finError) throw new Error("Cost record could not be deleted");

    //Delete from categories
    const { catError } = await supabase
      .from(eqCategory)
      .delete()
      .eq("selcode", selcode);
    if (catError) throw new Error("Cost record could not be deleted");
  } else {
    console.error("Failed to delete images or invoices. Operation aborted.");
  }

  // await property.deleteOne();
  // revalidatePath('/', 'layout')
}
export default delete_item;

