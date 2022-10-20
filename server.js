const express = require("express");
const fs = require("fs");
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static("./client/build"));

// Controllers
const adminController = require('./controllers/admin');
const emailController = require('./controllers/email');

// Middleware
app.use((request, response, next) => {
    console.log(`*** Request method: ${request.method} and route: ${request.path} at ${new Date()} ***`)
    next();
});

// Routing
app.use('/admin', adminController);
app.use('/email', emailController);

// Used for unspecified routes
app.get("*", (req, res) => {
    res.setHeader("content-type", "text/html");
    fs.createReadStream(`${__dirname}/client/build/index.html`).pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}. Go to http://localhost:${port} to view.`);
});