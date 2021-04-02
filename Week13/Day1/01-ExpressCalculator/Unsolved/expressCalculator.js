// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/", function (req, res) {
  res.send('You must specify 2 numbers after your operator.');
});

app.get("/:operation/:num1/:num2", function (req, res) {
  const operation=req.params.operation;
  const num1=req.params.num1;
  const num2=req.params.num2;

  if (req.params.operation == 'add') {
    res.send('add');
  } else if (req.params.operation == 'subtract') {
    res.send('sub');
  } else if (req.params.operation == 'multiply') {
    res.send('mult');
  } else if (req.params.operation == 'divide') {
    res.send('div');
  }

// Initialize the result variable to send later
var result;
// Switch statement chooses operation based on the operation parameter.
switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
    // Add your logic here. Pun intended.
    break;
  case "subtract":
    // Subtract logic
    break;
  case "multiply":
    // Multiply
    break;
  case "divide":
    // Divide
    break;
  default:
    // Handle anything that isn't specified
    result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
}

// We return the result back to the user in the form of a string
res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
