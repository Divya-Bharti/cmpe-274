var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET home page.
 */
// router.get('/feedback', ctrlMain.home);

router.get('/', ctrlMain.feedback);

//export this router to use in our index.js
module.exports = router;