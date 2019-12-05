var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var dbHelper = require('../db/dbconnect');
var MongoClient = require('mongodb').MongoClient;


// parse various different custom JSON types as JSON
router.use(bodyParser.json({
  type: 'application/*+json'
}))

// parse some custom thing into a Buffer
router.use(bodyParser.raw({
  type: 'application/vnd.custom-type'
}))

// parse an HTML body into a string
router.use(bodyParser.text({
  type: 'text/html'
}))

const url = "mongodb+srv://dbuser:dbpassword@cluster0-zrwns.mongodb.net/test?retryWrites=true&w=majority"
var db = null;
const dbName = "QuestionFlows";

//Connect to the database when the application is started
MongoClient.connect(url, function (err, client) {

  console.log("Connected successfully to server");
  db = client.db(dbName);
  if (db != null) {
    console.log("Connected to database");
  }

});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


/* For signing in*/
router.post('/signin', function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password
  var _isUser = false;
  console.log(username)
  dbHelper.listUsers(db, function (result) {
    result.forEach(element => {
      if (username == element.username) {
        if (password == element.password) {
          //Username and password match send true and move to next page, else send false. 
          _isUser = true;
        }
      }
    });
    res.send(_isUser);
  });
});

router.get("/listQuestions",function(req,res,next){
  dbHelper.listQuestions(db, function(result){
    res.json(result);
  })
})

/*For Creating a new user*/
router.post("/createUser", function (req, res, next) {
  console.log(req.body.username)
  //request from React has 2 variables, username and password
  var obj = {
    username: req.body.username != null ? req.body.username : "",
    password: req.body.password != null ? req.body.password : ""
  }
  res.send(dbHelper.createUser(obj, db, null));
});

/*For Creating a Question*/
router.post("/createQuestion", function (req, res, next) {
  //request from React has 3 variables, username, question and id
  var obj = {
    user: req.body.username != null ? req.body.username : "",
    question: req.body.question != null ? req.body.question : "",
    id: req.body.id != null ? req.body.id : "",
  }
  res.send(dbHelper.createQuestion(obj, db, null));
});


/*For Creating a Question*/
router.post("/createAnswer", function (req, res, next) {
  //request from React has 2 variables, quesitonid and answer
  var obj = {
    id: req.body.id != null ? req.body.id : "",
    answer: req.body.answer != null ? req.body.answer : "",
  }
  res.send(dbHelper.createAnswer(obj, db, null));
});




router.post('/testAPI', (req, res) => {
  console.log("Request body", req.body);
  res.status(200).json({
    message: "API post successful",
    body: req.body
  })
})




module.exports = router;