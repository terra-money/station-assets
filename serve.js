const express = require('express');
const cors = require('cors');
const fs = require("fs");
const path = require("path");

const app = express();
const publicDir = path.join(__dirname, "public");

app.use(cors());

// Serve static JSON files
app.use(express.static('public'));

// Recursive function to find JSON files
function findJsonFiles(directory, fileList = []) {
    const files = fs.readdirSync(directory);
  
    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
  
      if (stat.isDirectory()) {
        findJsonFiles(filePath, fileList);
      } else if (path.extname(file) === '.json') {
        fileList.push(filePath);
      }
    });
  
    return fileList;
  }
  
  // Endpoint to display links to JSON files
  app.get('/', (req, res) => {
    const jsonFiles = findJsonFiles(publicDir);
  
    const links = jsonFiles.map((file) => {
      const relativePath = path.relative(publicDir, file);
      return `<a href="/${relativePath}">${relativePath}</a>`;
    });
  
    res.send(links.join('<br>'));
  });

// Start the server
app.listen(3001, () => {
  console.log('Server is running');
});
