// Simple Node.js Server
const http = require("http");

// function requestListenter(req, res) {
//   console.log(req);
// }

// http.createServer(requestListenter);

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
