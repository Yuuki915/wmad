const { fstat } = require("fs");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      `
        <html>
            <head>
                <title>First Page</title>
            </head>
            <body>
                <h1>
                    Hello Node!
                </h1>
                <a href='http://localhost:8000/read-message'>Read message</a>
                <a href='http://localhost:8000/write-message'>Write message</a>
            </body>
        </html>
        `
    );
    res.end();
  }

  if (req.url === "/write-message") {
    res.write(
      `
        <html>
            <head>
                <title>First Page</title>
            </head>
            <body>
                <h1>
                    Write message page
                </h1>
                <form action='/read-message' method='post'>
                    <input type='text' name='message'/>
                    <button type='submit'>Submit</button>
                </form>
                <a href='http://localhost:8000/read-message'>Read message</a>
                <a href='http://localhost:8000/write-message'>Write message</a>
            </body>
        </html>
        `
    );
    res.end();
  }

  if (req.url === "/read-message") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log({ parsedBody });
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) throw err;
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

server.listen(8000);
