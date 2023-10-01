const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

function countFilesInFolder(folderPath) {
  let fileCount = 0;

  try {
    const items = fs.readdirSync(folderPath);

    for (const item of items) {
      const itemPath = path.join(folderPath, item);
      const stats = fs.statSync(itemPath);

      if (stats.isFile()) {
        fileCount++;
      }
    }

    return fileCount;
  } catch (error) {
    console.error(`Error counting files: ${error.message}`);
    return -1;
  }
}

const folderPath = "../my-portfolio/public/images";
let totalFiles = countFilesInFolder(folderPath);
let dummy = 0;

app.get("/sekar", (req1, res1) => {
  const { did } = req1.query;
  dummy = did;

  res1.send("dummy updated successfully");
  console.log("yes i got " + dummy);
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, folderPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${dummy}.jpg`);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  let { location, description } = req.body;
  totalFiles++;
  const id = totalFiles;
  const imageName = `${dummy}.jpg`;

  let imageData = {
    id,
    location,
    description,
    imageName,
  };

  const jsonFilePath = "../my-portfolio/src/dummy/data.json";
  let existingData = { details: [] };

  try {
    const fileContent = fs.readFileSync(jsonFilePath, "utf-8");
    if (fileContent) {
      existingData = JSON.parse(fileContent);
    }
  } catch (error) {
    console.error("Error reading JSON file:", error);
  }

  existingData.details.push(imageData);

  fs.writeFileSync(jsonFilePath, JSON.stringify(existingData, null, 2));

  res.send("Image and data saved successfully.");
});

app.get("/", (req, res) => {
  res.send("Hi, I am awake!");
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
