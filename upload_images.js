const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;

// Cloudinary Credentials Configuration
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "dnsviaxr1";
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

if (!API_KEY || !API_SECRET) {
  console.log("\x1b[31m%s\x1b[0m", "❌ Error: Cloudinary API credentials not found!");
  console.log("\nPlease run this script with your Cloudinary credentials as environment variables:");
  console.log("\x1b[36m%s\x1b[0m", `CLOUDINARY_API_KEY=your_api_key CLOUDINARY_API_SECRET=your_api_secret node upload_images.js`);
  console.log("\nYou can find these credentials in your Cloudinary Dashboard (https://console.cloudinary.com/).\n");
  process.exit(1);
}

// Configure Cloudinary SDK
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true
});

// Folders to scan and upload
const sourceFolders = ["public/images", "public/hero", "public/lauls image"];
const supportedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".JPG", ".JPEG", ".PNG", ".GIF", ".WEBP", ".SVG", ".mov", ".MOV", ".mp4", ".MP4"];

function getFilesRecursively(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFilesRecursively(fullPath, fileList);
    } else {
      const ext = path.extname(file);
      if (supportedExtensions.includes(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

async function uploadFile(filePath) {
  // Normalize path using forward slashes
  const normalizedPath = filePath.replace(/\\/g, "/");
  
  // Extract relative public_id (e.g., 'public/images/logo' -> 'images/logo')
  const ext = path.extname(normalizedPath);
  let publicId = normalizedPath.slice(0, -ext.length);
  if (publicId.startsWith("public/")) {
    publicId = publicId.substring(7);
  }

  console.log(`\x1b[33m⏳ Uploading:\x1b[0m ${filePath} -> [Public ID: ${publicId}]`);

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      overwrite: true,
      resource_type: "auto",
      invalidate: true
    });
    console.log(`\x1b[32m✔ Success:\x1b[0m ${filePath} -> \x1b[36m${result.secure_url}\x1b[0m`);
    return true;
  } catch (error) {
    console.error(`\x1b[31m❌ Failed:\x1b[0m ${filePath} - ${error.message}`);
    return false;
  }
}

async function main() {
  console.log("\x1b[35m%s\x1b[0m", "=========================================================");
  console.log("\x1b[35m%s\x1b[0m", "        LAULS LTD - CLOUDINARY BULK UPLOAD SCRIPT        ");
  console.log("\x1b[35m%s\x1b[0m", "=========================================================");
  console.log(`Cloud Name: ${CLOUD_NAME}`);
  
  // Collect all files
  let allFiles = [];
  for (const folder of sourceFolders) {
    const folderPath = path.join(__dirname, folder);
    const files = getFilesRecursively(folderPath);
    // Map relative paths from current directory
    const relativeFiles = files.map(f => path.relative(__dirname, f));
    allFiles = allFiles.concat(relativeFiles);
  }

  console.log(`Found ${allFiles.length} local assets to upload.\n`);

  if (allFiles.length === 0) {
    console.log("No assets found. Exiting.");
    return;
  }

  let successCount = 0;
  for (let i = 0; i < allFiles.length; i++) {
    const progress = `[${i + 1}/${allFiles.length}]`;
    console.log(`\n${progress}`);
    const success = await uploadFile(allFiles[i]);
    if (success) successCount++;
  }

  console.log("\n\x1b[35m%s\x1b[0m", "=========================================================");
  console.log("\x1b[32m%s\x1b[0m", `🎉 Upload completed! ${successCount}/${allFiles.length} assets uploaded successfully.`);
  console.log("\x1b[35m%s\x1b[0m", "=========================================================");
}

main();
