const { writeFileSync, readFileSync } = require("fs");
const path = require("path");
const { randomInt } = require("crypto");

const txtDirPath = path.join(__dirname, "/text");

let textIn = "";
const fileCount = 3;

// Create files
for (let i = 1; i <= fileCount; i++) {
  try {
    let fileName = path.join(txtDirPath, "file" + i + ".txt");
    const lines = 5 + randomInt(fileCount * 2);
    let str = "";
    for (let j = 1; j <= lines; j++) {
      str += "file" + i + " - " + j + "\n";
    }

    str = str.substring(0, str.length - 1);

    writeFileSync(fileName, str);
    console.log(`Created ${fileCount} files`);
  } catch (err) {
    console.log(err);
  }
}

// Read files and create output
let a = readFileSync(path.join(txtDirPath, "file1.txt"), "utf8").split("\n");
let b = readFileSync(path.join(txtDirPath, "file2.txt"), "utf8").split("\n");
let c = readFileSync(path.join(txtDirPath, "file3.txt"), "utf8").split("\n");

let i1 = 0,
  i2 = 0,
  i3 = 0;
let block = 1;

let output = "";

while (i1 < a.length || i2 < b.length || i3 < c.length) {
  // File 1
  for (let i = 0; i < block; i++) {
    if (i1 < a.length) {
      output += a[i1] + "\n";
      i1++;
    }
  }

  // File 2
  for (let i = 0; i < block; i++) {
    if (i2 < b.length) {
      output += b[i2] + "\n";
      i2++;
    }
  }

  // File 3
  for (let i = 0; i < block; i++) {
    if (i3 < c.length) {
      output += c[i3] + "\n";
      i3++;
    }
  }

  block++;
}

writeFileSync("output.txt", output);

console.log("Done!");
