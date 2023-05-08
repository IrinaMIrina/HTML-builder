const fs = require('fs');
const path = require('path');
  
const dirPath = path.join(__dirname, 'secret-folder');

fs.readdir(dirPath, {withFileTypes: false},(err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("\nФайлы, содержащиеся в папке:");
    files.forEach(file => {
      console.log(`${path.basename(file, path.extname(file))} - ${path.extname(file).slice(1)} -`);
    })
  } 
})