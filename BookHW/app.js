const http = require("http");
const fs = require("fs");

let html = fs.readFileSync(__dirname + "/template/page.html", "utf8");

// Create Server
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(html);
});

server.listen(3000);
