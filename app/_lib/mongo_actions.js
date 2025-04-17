"use server";
/*
import connectDB from "@/app/_config/database";
import HIAssets from "@/app/_models/HI_Assets";
import AssetCategories from "@/app/_models/HI_Categories";
import AssetLocations from "@/app/_models/HI_Locations";
import fs from 'fs';
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import path from 'path';
import { buildAssetsData } from "@/app/_lib/helpers";

// // Error function
// function handleSupabaseError(error, operation) {
//   console.error(`${operation} failed:`, error);
//   throw new Error(`${operation} failed. Please try again later.`);
// }

// async function upload(file, fileType) {
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("fileType", fileType);

//   // Use the full URL for the API route
//   const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3002";
//   const apiUrl = `${baseUrl}/api/upload`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       body: formData,
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to upload file: ${response.statusText}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     throw error;
//   }
// }


//Get all data for specific assets
export async function getAssetsList(id) {
  await connectDB();

  try {
    // Ensure the id is valid for MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }

    // Query the MongoDB collection using the model

    const data = await HIAssets.findById(id).lean();
    // console.log("Query Result:", data);
    if (!data) {
      throw new Error("Asset not found");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to retrieve asset");
  }
}

// Category Actions

export async function getCategoryList() {
  await connectDB();
  const json_category_Data = await AssetCategories.find({})
    .sort({ _id: 1 })
    .lean();
  return json_category_Data.map((category) => ({
    ...category,
    _id: category._id.toString(),
  }));
}

export async function updateCategory(params) {
  await connectDB();

  const { _id, description } = params;

  if (!_id) throw new Error("Category ID is required");

  try {
    const updatedCategory = await AssetCategories.findByIdAndUpdate(
      _id,
      { description },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      throw new Error("Category not found or could not be updated");
    }

    // Trigger revalidation only if the update is successful
    revalidatePath("/account/admin/categories");

    return updatedCategory;
  } catch (error) {
    throw new Error(`Failed to update category: ${error.message}`);
  }
}

export async function duplicateCategory(params) {
  await connectDB();

  const description = "New Category";

  const updateData = { description };

  try {
    const result = await AssetCategories.create(updateData);

    if (!result) {
      throw new Error("Asset category could not be duplicated");
    }

    // Trigger revalidation only if the update is successful
    revalidatePath("/account/admin/categories");
    return result;
  } catch (error) {
    console.error("Error duplicating category:", error);
    throw new Error("An error occurred while duplicating the category");
  }
}

// Location Actions

export async function getLocationList() {
  await connectDB();
  const json_location_Data = await AssetLocations.find({})
    .sort({ _id: 1 })
    .lean();
  return json_location_Data.map((location) => ({
    ...location,
    _id: location._id.toString(),
  }));
}

export async function updateLocation(params) {
  await connectDB();

  const { _id, description } = params;

  if (!_id) throw new Error("Location ID is required");

  try {
    const updatedLocation = await AssetLocations.findByIdAndUpdate(
      _id,
      { description },
      { new: true, runValidators: true }
    );

    if (!updatedLocation) {
      throw new Error("Location not found or could not be updated");
    }

    // Trigger revalidation only if the update is successful
    revalidatePath("/account/admin/locations");

    return updatedLocation;
  } catch (error) {
    throw new Error(`Failed to update locations: ${error.message}`);
  }
}

export async function duplicateLocation(params) {
  await connectDB();

  const description = "New Location";

  const updateData = { description };

  try {
    const result = await AssetLocations.create(updateData);

    if (!result) {
      throw new Error("Asset location could not be duplicated");
    }

    // Trigger revalidation only if the update is successful
    revalidatePath("/account/admin/locations");
  } catch (error) {
    console.error("Error duplicating location:", error);
    throw new Error("An error occurred while duplicating the location");
  }
}

//Add Asset
export async function addAsset(formData) {
  // const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  // const imageDir = path.join(uploadDir, 'images');
  // const invoiceDir = path.join(uploadDir, 'invoices');
  // const instructionsDir = path.join(uploadDir, 'instructions');

// Ensure directories exist
// [imageDir, invoiceDir, instructionsDir].forEach(dir => {
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir, { recursive: true });
//   }
// });

// Handle image upload
// let imageFile = formData.get('image');
// if (!imageFile) {
//   imageFile = { name: "AssetImageMissing.jpg", arrayBuffer: async () => null };
// }

// const imagePath = path.join(imageDir, imageFile.name);
// const imageArrayBuffer = imageFile.arrayBuffer ? await imageFile.arrayBuffer() : null;

// if (imageArrayBuffer) {
//   fs.writeFileSync(imagePath, Buffer.from(imageArrayBuffer));
// }

// Handle invoice upload
// let invoiceFile = formData.get('invoice');
// if (!invoiceFile) {
//   invoiceFile = { name: "0000 Missing Invoice.pdf", arrayBuffer: async () => null };
// }

// const invoicePath = path.join(invoiceDir, invoiceFile.name);
// const invoiceArrayBuffer = invoiceFile.arrayBuffer ? await invoiceFile.arrayBuffer() : null;

// if (invoiceArrayBuffer) {
//   fs.writeFileSync(invoicePath, Buffer.from(invoiceArrayBuffer));
// }

// Handle instructions upload
// let instructionsFile = formData.get('instructions');
// if (!instructionsFile) {
//   instructionsFile = { name: "0000 No Instructions.pdf", arrayBuffer: async () => null };
// }

// const instructionsPath = path.join(instructionsDir, instructionsFile.name);
// const instructionsArrayBuffer = instructionsFile.arrayBuffer ? await instructionsFile.arrayBuffer() : null;

// if (instructionsArrayBuffer) {
//   fs.writeFileSync(instructionsPath, Buffer.from(instructionsArrayBuffer));
// }



  // Get form data
    
  // const assetData = buildAssetsData(formData, imageFile, instructionsFile, invoiceFile, "add");
  const assetData = buildAssetsData(formData,  "add");

  //Post form data
  console.log("Asset Data:", assetData);
  try {
    const result = await HIAssets.create(assetData);

    if (!result) {
      throw new Error("Asset could not be added");
    }

    // Trigger revalidation only if the update is successful
    revalidatePath("/hiassets");
  } catch (error) {
    console.error("Error inserting asset:", error);
    throw new Error("An error occurred while inserting asset");
  }

  //revalidatePath("/hiassets");
}

//Edit existing sail
export async function editAsset(formData) {
  // const session = await auth();
  // if (!session) throw new Error("You must be logged in");
  // // Upload Images
  // const images = formData.getAll("image");
  // const imageUrls = await AssetAttachments(images, "ws_images");
  // // Upload Invoices
  // const invoices = formData.getAll("invoice");
  // const invoiceUrls = await AssetAttachments(invoices, "ws_invoices");
  // // Set the selcode
  // const selcode = formData.get("selcode");
  // // Get form data
  // const technicalData = sailTechnicalData(
  //   formData,
  //   imageUrls,
  //   session.user.appUserId,
  //   "edit"
  // );
  // const financialData = buildFinancialData(formData, invoiceUrls, "edit");
  // //Post form data
  // // const { data: technicalDataEdit, error: technicalError } = await supabase
  // //   .from("ws_sails")
  // //   .update(technicalData)
  // //   .eq("selcode", selcode);
  // // if (technicalError)
  // //   handleSupabaseError(technicalError, "Updating technical data");
  // // const { data: FinancialDataEdit, error: financialError } = await supabase
  // //   .from("ws_costs")
  // //   .update(financialData)
  // //   .eq("selcode", selcode);
  // // if (financialError)
  // //   handleSupabaseError(financialError, "Updating financial data");
  // revalidatePath("/hiassets");
}
*/