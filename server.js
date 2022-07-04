var express = require("express"),
  http = require("http"),
  app = express(),
  toDos = [{
      "description": "Get groceries",
      "tags": ["shopping", "chores"]
    },
    {
      "description": "Make up some new ToDos",
      "tags": ["writing", "work"]
    },
    {
      "description": "Prep for Monday's class",
      "tags": ["work", "teaching"]
    },
    {
      "description": "Answer emails",
      "tags": ["work"]
    },
    {
      "description": "Take Gracie to the park",
      "tags": ["chores", "pets"]
    },
    {
      "description": "Finish writing this book",
      "tags": ["writing", "work"]
    }
  ];
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3003); 

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/todos", function (req, res) {
  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo); 
  res.json({
    "message": "Started"
  });
});