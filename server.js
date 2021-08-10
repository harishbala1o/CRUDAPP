const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
require("dotenv").config();

const restaurantRouter = require("./routes/api");

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
  res.sendFile(path.join (__dirname+'/index.html'));
});
// listen for requests
app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});
