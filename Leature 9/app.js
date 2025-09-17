//External Module
const express = require('express');

//Local Module
const userRequestHandler = require('./user');

const app = express();

app.get("/", (req, res, next) => {
  console.log('Came in first middleware', req.url, req.method);
  next();
});

app.post("/submit-details",(req, res, next) => {
  console.log('Came in second middleware', req.url, req.method);
  res.send("<h1>Welcome to Express</h1>")
});

app.use("/",(req, res, next) => {
  console.log('Came in third middleware', req.url, req.method);
  res.send("<h1>Welcome to Express</h1>")
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
