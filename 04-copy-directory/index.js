const fs = require('fs');
const path = require('path');
const srcDir = path.join(__dirname, 'files');
const destDir = path.join(__dirname, 'files-copy');

function copyDir(){
  fs.mkdir(destDir, { recursive: true},(err) => {
    if(err) throw err;
  })
  fs.readdir(srcDir, {withFileTypes: true},(err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\nФайлы скопированы в папку files-copy");
      files.forEach(file => {
        fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (err) => {
          if (err) throw err;
        });
      })
    } 
  })
}
copyDir();


