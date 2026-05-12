const https = require("https");
const fs = require("fs");
const path = require("path");

const targetDir = path.join(__dirname, "public", "images", "products");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "LaulsWebBot/1.0" } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // Follow redirect
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log("Downloaded:", path.basename(dest));
          resolve();
        });
      } else {
        console.error("Failed to download " + url + ": " + response.statusCode);
        resolve(); // resolve anyway so we don't block
      }
    }).on("error", (err) => {
      console.error("Error downloading " + url + ": " + err.message);
      resolve();
    });
  });
}

// We will use precise file titles for Wikipedia Commons
const exactFiles = {
  "ferromanganese.jpg": "Ferromanganese_nodule.jpg",
  "ferrochrome.jpg": "Ferrochrome_ore.JPG",
  "ferrosilicon.jpg": "Ferrosilicon.JPG",
  "silicomanganese.jpg": "Manganese_nodule.jpg",
  "wire_rod_coils.jpg": "Steel_wire_rod_coils.jpg",
  "mild_steel_wire.jpg": "Steel_wire_coils.jpg",
  "stainless_wire.jpg": "Stainless_steel_wire_coil.jpg",
  "steel_billets.jpg": "Steel_billets.jpg",
  "mild_steel_rounds.jpg": "Mild_steel_bars.jpg",
  "steel_tubes.jpg": "Steel_pipes.jpg",
  "hollow_sections.jpg": "Rectangular_hollow_sections.jpg"
};

async function main() {
  const promises = [];
  for (const [filename, wikiFile] of Object.entries(exactFiles)) {
    const dest = path.join(targetDir, filename);
    const url = "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(wikiFile);
    promises.push(downloadFile(url, dest));
  }
  await Promise.all(promises);
  console.log("Done downloading images.");
}

main();
