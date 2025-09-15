const {sumRequestHandler} = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  // Home page
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Practice Set</title>
        </head>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go To Calculator</a>
        </body>
      </html>
    `);
    return res.end(); // ✅ stop here
  }

  // Calculator page
  else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Practice Set</title>
        </head>
        <body>
          <h1>Here is the Calculator</h1>
          <form action="/calculate-result" method="POST">
            <input type="text" placeholder="First number" name="first" />
            <input type="text" placeholder="Second number" name="second" />
            <button type="submit">Calculate</button> <!-- ✅ added submit -->
          </form> 
        </body>
      </html>
    `);
    return res.end(); // ✅ stop here
  } else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
    return sumRequestHandler(req, res);
  }

  // 404 page (default)
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>Practice Set</title>
      </head>
      <body>
        <h1>404 Page does not exist</h1>
        <a href="/">Go To Home</a>
      </body>
    </html>
  `);
  return res.end();
};

exports.requestHandler = requestHandler;
