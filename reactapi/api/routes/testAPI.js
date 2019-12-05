var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var m = require('../db/dbconnect');

router.get('/', function(req, res, next) {
    res.send("Root Discovered!");
});
//I moved the files from here to the Index.js.
//Its easier to test it that way


router.post('/testAPI', (req, res)=>{
    console.log("Request body", req.body);
    res.status(200).json({
      message:"API post successful",
      body:req.body
    })
  })
  


router.get('/signin', function(req, res, next) {
    //send username and password
    //Check how to capture param and post variables
    var username = req.param('username');
    var password = req.param('password');
    //Create this function and return an object with the id(int) and status(boolean)
    var data =  mongo.mongoLoginCheck(username,password)
    if(data.status){
        res.send(data.id); 
    }else{
        res.send('Error')
    }
});

router.get('/paramQuestionList', function(req, res, next) {
    //return all the questions
    res.send('Return list of questions');
});

router.get('/postAnswer', function(req, res, next) {
    var id = req.param('id')
    var answer = req.param('answer')
    //This function return an ID
    //Reload the list with the answer
    var result = mongo.postAnswer(id,answer);
    res.send('Post an Answer');
});

router.get('/deleteQuestion', function(req, res, next) {
    //get ID, connect to the db, delete post  and reload

    res.send('Delete question');
});

router.get('/getQuestionForAnswer', function(req, res, next) {
    res.send('Post an Answer');
});



module.exports = router;