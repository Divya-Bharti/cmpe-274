var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

router.use("/", bodyParser.json());
router.use("/", bodyParser.urlencoded());

/*
 * GET home page.
 */
router.get('/', ctrlMain.dashboard);



//export this router to use in our index.js
module.exports = router;