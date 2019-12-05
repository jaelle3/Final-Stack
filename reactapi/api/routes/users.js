var express = require('express');
var router = express.Router();


router.post('/signin', (req, res)=>{
  
  console.log("Request body", req.body);
  res.status(200).json({
    message:"Received your request",
    body:req.body
  })
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Roland');
});


module.exports = router;
