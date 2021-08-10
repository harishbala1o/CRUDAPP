const express = require("express");
const router = express.Router();

const db = require("../config/db.config.js");
const dbName = "sample_restaurants";
const collectionName = "restaurants";

db.initialize(
    dbName,
    collectionName,
    function (dbCollection) {
      // successCallback
      // get all items
      dbCollection.find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
      });
  
// << db CRUD routes >>
router.post("/", (request, response) => {
    const restaurant = request.body;
    dbCollection.insertOne(restaurant, (error, result) => {
      // callback of insertOne
      if (error) throw error;
      // return updated list
      // dbCollection.find().toArray((_error, _result) => {
        // callback of find
      //   if (_error) throw _error;
        response.json(result);
      // });
    });
  });

  router.get("/:id", (request, response) => {
    const restaurantId = request.params.id;
    console.log ("resturant is id",restaurantId);
    dbCollection.findOne({ restaurant_id: restaurantId }, (error, result) => {
      if (error) throw error;
      // return item
      response.json(result);
    });
  });

  router.get("/", (request, response) => {
    // return updated list
    dbCollection.find().toArray((error, result) => {
      if (error) throw error;
      response.json(result);
    });
  });

  router.put("/:id", (request, response) => {
    const restaurantId = request.params.id;
    const name = request.body;
    console.log("Editing restaurant:", restaurantId, " to be ", name);

    dbCollection.updateOne(
      { restaurant_id : restaurantId },
      { $set: name },
      (error, result) => {
        if (error) throw error;
        // send back entire updated list, to make sure frontend data is up-to-date
       // dbCollection.find().toArray(function (_error, _result) {
         // if (_error) throw _error;
          response.json(result);
      //   });
      }
    );
  });

  router.delete("/:id", (request, response) => {
    const restaurantId = request.params.id;
    console.log("Delete item with id: ", restaurantId);

    dbCollection.deleteOne({ restaurant_id: restaurantId }, function (error, result) {
      if (error) throw error;
      // send back entire updated list after successful request
  //     dbCollection.find().toArray(function (_error, _result) {
      //   if (_error) throw _error;
        response.json(result);
      // });
    });
  });
},
function (err) {
  // failureCallback
  throw err;
}
);


module.exports = router