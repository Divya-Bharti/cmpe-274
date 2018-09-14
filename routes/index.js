var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.sendFile('index.html', { root: "./views" })
});

//export this router to use in our index.js
module.exports = router;