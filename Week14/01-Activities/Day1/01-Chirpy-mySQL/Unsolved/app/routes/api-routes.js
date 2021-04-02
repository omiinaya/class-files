// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var moment = require("moment");

// Routes
// =============================================================
module.exports = function (app) {

  let chirps = [];

  // Get all chirps
  app.get("/api/all", (req, res) => {
    connection.query("SELECT * FROM chirps", function (err, data) {
      res.send(data);
    });
  });

  // Add a chirp
  app.post("/api/new", (req, res) => {
    var newChirp = req.body;
    var time = moment(req.body.created_at, "X").format("YY-MM-DD HH:mm:ss");
    console.log(time);
    console.log(newChirp);
    connection.query("INSERT INTO chirps set ?",
      {
        author: newChirp.author,
        chirp: newChirp.body,
        time: time
      },
      function (err) {
        if (err) throw err;
        console.log("Your new chirp has been created!")
      },
      connection.query("SELECT * FROM chirps", function (err, data) {
        res.send(data);
      })
    );
  });

  //to save to db
  //moment(req.body.created_at,"YYY-MM-DD HH:mm:ss").format("X");
  //to send value from db to frontend
  //moment(result.created_at,"X").format("YYYY-MM-DD HH:mm:ss");
};
