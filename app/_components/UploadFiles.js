import fs from 'fs';
import path from 'path';

export async function UploadFiles(files, directory) {
  const uploadDir = path.join(process.cwd(), "public", "uploads", directory);

  // Ensure directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const fileUrls = [];

  for (const file of files) {
    if (!file) {
      fileUrls.push(null);
      continue;
    }

    const filePath = path.join(uploadDir, file.name);
    const fileArrayBuffer = file.arrayBuffer ? await file.arrayBuffer() : null;

    if (fileArrayBuffer) {
      fs.writeFileSync(filePath, Buffer.from(fileArrayBuffer));
      fileUrls.push(`/uploads/${directory}/${file.name}`);
    } else {
      fileUrls.push(null);
    }
  }

  return fileUrls;
}