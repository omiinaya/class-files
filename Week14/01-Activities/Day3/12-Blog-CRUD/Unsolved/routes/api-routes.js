// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our blogger model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    db.Post.findAll({}).then(function(dbblogger) {
      // We have access to the bloggers as an argument inside of the callback function
      res.json(dbblogger);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
      db.Post.findAll({
        where: {
          category: req.params.category
        }
      }).then(function(dbblogger) {
        // We have access to the bloggers as an argument inside of the callback function
        res.json(dbblogger);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Post.findOne({ 
      where: {
      id: req.params.id
    }
  }).then(function(dbblogger) {
      // We have access to the bloggers as an argument inside of the callback function
      res.json(dbblogger);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }).then(function(dbblogger) {
      // We have access to the new blogger as an argument inside of the callback function
      res.json(dbblogger);
    });

  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the bloggers we want to destroy
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbblogger) {
      res.json(dbblogger);
    });

  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the bloggers we want to update
    db.Post.update({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbblogger) {
      res.json(dbblogger);
    });

  });
};
