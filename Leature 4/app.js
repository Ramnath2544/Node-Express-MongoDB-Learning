const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");

  if (req.url === "/") {
    res.write("<h1>Welcome to Home Page</h1>");
    res.end();
  } else if (req.url.toLowerCase() === "/products") {
    res.write("<h1>Products</h1>");
    res.end();
  } else {

  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  res.end();
  }

  // process.exit(); //Stops event loop
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
