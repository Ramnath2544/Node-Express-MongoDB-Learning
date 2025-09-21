// Core Modules
const path = require('path');

// Express Modules
const express = require('express');

// Local Modules
const rootDir = require('./utils/pathUtil');
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(require('path').join(rootDir, 'views', '404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
