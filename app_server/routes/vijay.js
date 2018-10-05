var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET home page.
 */
router.get('/', ctrlMain.vijay);

/*
 * POST home page.
 */
// router.post('/', ctrlMain.post_feedback);

//export this router to use in our index.js
module.exports = router;