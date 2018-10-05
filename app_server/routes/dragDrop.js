var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET dragDrop page.
 */
router.get('/', ctrlMain.dragDrop);

//export this router to use in our index.js
module.exports = router;