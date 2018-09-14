var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   //res.sendFile(path.join(app.get('views')+'/index.html'));
   res.send('GET route on index.');
});

//export this router to use in our index.js
module.exports = router;