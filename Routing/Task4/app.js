const http = require("http");
const { readFileSync } = require("fs");

// get all files
const mainPage = readFileSync("./templates/index.html");
const mainCSS = readFileSync("./templates/styles.css");
const bookImage = readFileSync("./templates/book.jpg");

const server = http.createServer((req, res) => {
  const url = req.url;
  // main page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(mainPage);
    res.end();
  }
  // styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(mainCSS);
    res.end();
  }
  // image/logo
  else if (url === "/book.jpg") {
    res.writeHead(200, { "content-type": "image/jpg" });
    res.write(bookImage);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

console.log(`Server on`);
server.listen(3000);
