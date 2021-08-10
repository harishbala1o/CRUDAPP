# CRUD API with Node.js + Express + mongoDB

A sample resturant database to create APIs using CRUD application with Node.js, Express and MongoDB.

## Requirements

* Node
* Express
* MongoDB

### `mongod`
This command will start your mongodb server on your machine. If you have not start the mongodb on
your then you will get database connection error when run node server.

 In the project directory, you can run:

### `npm install`

This will install the dependencies inside `node_modules`

### `node server.js` OR `nodemon start`

Runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

## CRUD routes

Here's a rundown of the CRUD-to-MongoDB operations and can be tested using API mentioned below 

|CRUD Operation      |REST operation     |
|--------------------|-------------------|
|Create              |POST `https://basiccrudapi.herokuapp.com/restaurants`|
|Read one|GET`https://basiccrudapi.herokuapp.com/restaurants/:id`|
|Read all|GET `https://basiccrudapi.herokuapp.com/restaurants`|
|Update|PUT `https://basiccrudapi.herokuapp.com/restaurants/:id`|
|Delete|DELETE `https://basiccrudapi.herokuapp.com/restaurants/:id`|

All of these routes go in the `<<db CRUD routes>>`

## Factors I would have considered if the this was deployed on production 

* Built with frontend 
* Secured API
* Crontrollers to route requests 

