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
 * POST Overdose page.
 */
router.post('/overdose', ctrlMain.overdosePost);

/*
 * GET Overdose page.
 */
router.get('/overdose', ctrlMain.overdoseGetAll);

/*
 * GET Overdose page for one state
 */
router.get('/overdose/:id', ctrlMain.overdoseGet);

/*
 * GET form for new data
 */
router.get('/newoverdose', ctrlMain.overdoseNewForm);

/*
 * GER form to edit existing data
 */
router.get('/editoverdose', ctrlMain.overdoseEditForm);

/*
 * DELETE Overdose page.
 */
router.delete('/delete/:id', ctrlMain.overdoseDelete);

/*
 * PUT Overdose page.
 */
router.put('/update/:id', ctrlMain.overdoseUpdate);

/*
 * POST METHOD FOR SEARCHING AND RETREIVING OVERDOSE DATA
 */
router.get('/search/:state', ctrlMain.overdoseSearch);

// get dashboard
router.get('/dashboard', ctrlMain.dashboard);

//export this router to use in our index.js
module.exports = router;