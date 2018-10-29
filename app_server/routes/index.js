var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");


/*
 * GET home page.
 */
router.get('/', ctrlMain.home);

/*
 * GET home page.
 */
router.get('/home', ctrlMain.home);

/*
 * GET dragDrop page.
 */
router.get('/dragDrop', ctrlMain.dragDrop);

/*
 * GET drug name page.
 */
router.get('/drugName', ctrlMain.drugName);

/*
 * GET State vs Death page.
 */
// router.get('/feedback', ctrlMain.home);

router.get('/StateVsDeath', ctrlMain.StateVsDeath);

/*
 * GET State vs Population page.
 */
// router.get('/feedback', ctrlMain.home);

router.get('/StateVsPop', ctrlMain.StateVsPop);

/*
 * GET heatmap page.
 */
// router.get('/feedback', ctrlMain.home);

router.get('/heatmap', ctrlMain.heatmap);

/*
 * GET feedback page.
 */
router.get('/feedback', ctrlMain.get_feedback);


/*
 * GET About US page.
 */
// router.get('/aboutUs', ctrlMain.aboutUs);


// router.get('/aboutUs', function(req, res){
//     res.render('aboutUs',{data : 'trrttggdfjsgfikjbh'})
// });

router.get('/aboutUs', ctrlMain.aboutUs);


/*
 * GET Amogh's page.
 */
router.get('/aboutUs/amogh', ctrlMain.amogh);

/*
 * GET Divya's page.
 */
router.get('/aboutUs/divya', ctrlMain.divya);

/*
 * GET Indira's page.
 */
router.get('/aboutUs/indira', ctrlMain.indira);

/*
 * GET Vijay's page.
 */
router.get('/aboutUs/vijay', ctrlMain.vijay);


/*
 * GET Overdose page.
 */
router.get('/overdose', ctrlMain.overdoseGet);

/*
 * POST Overdose page.
 */
router.post('/overdose', ctrlMain.overdosePost);



//export this router to use in our index.js
module.exports = router;