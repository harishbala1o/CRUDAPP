const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const restaurantRouter = require("./routes/api");

const http = require ('http');
const fs  = require ('fs');

const handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};


// Setup server port
const port = process.env.PORT || 4000;
// parse requests of content-type - application/json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// << db setup >>
const db = require("./config/db.config.js");
const dbName = "sample_restaurants";
const collectionName = "restaurants";

app.use("/restaurants", restaurantRouter);

// define a root/default route
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
// listen for requests
app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});
