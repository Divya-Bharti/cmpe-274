/*
 * GET home page.
 */
module.exports.home = function(request, result) 
{
    result.render('index');
};

/*
 * GET feedback.
 */
module.exports.get_feedback = function(request, result) 
{
    result.render('feedback');
};

/*
 * POST feedback.
 */
 
/*module.exports.post_feedback = function(request, result) 
{
     //result.send("Thank you for your feedback");
};*/

/*
 * GET StateVsDeath.
 */
module.exports.StateVsDeath = function(request, result) 
{
    result.render('StateVsDeath');
};

/*
 * GET StateVsPop.
 */
module.exports.StateVsPop = function(request, result) 
{
    result.render('StateVsPop');
};

/*
 * GET heatmap.
 */
module.exports.heatmap = function(request, result) 
{
    result.render('heatmap');
};


/*
 * GET drug names.
 */
module.exports.drugName = function(request, result) 
{
    result.render('drugName');
};


/*
 * GET drag and drop page
 */
module.exports.dragDrop = function(request, result)
{
    result.render('dragDrop');
}



/*
 * GET amogh details.
 */
module.exports.amogh = function(request, result) 
{
    result.sendFile('amogh.html',{ root: "./app_server/views/members" });
};



/*
 * GET amogh details.
 */
module.exports.divya = function(request, result) 
{
    result.sendFile('divya.html',{ root: "./app_server/views/members" });
};



/*
 * GET amogh details.
 */
module.exports.indira = function(request, result) 
{
    result.sendFile('indira.html',{ root: "./app_server/views/members" });
};



/*
 * GET amogh details.
 */
module.exports.vijay = function(request, result) 
{
    result.sendFile('vijay.html',{ root: "./app_server/views/members" });
};


var Overdose = require('../models/overdose');

/*
 * GET overdose.
 */
module.exports.overdoseGet = function(request, result) 
{
	/* code to save to the db.. use later
	var o = new Overdose();
    o.State = "ZZZZ";
    o.Population = 120;
    o.Deaths = 12;
    o.Abbrev = "ZZ";
    o.save();
    */
    // if u check the console.. u'll see the entire db printed.. we have to display this in tabular format
    
	Overdose.find({}, function(err, results){
    //var x= results;
    //console.log("hitting overdoseGet"+results);
    result.render('Overdoses', {data : results});
    
    });
    //result.sendFile('Overdoses.html',{ root: "./app_server/views" });
    

	// we'd want to pass this above "result" json to out html to display.. so sendFile wont wont work anymore,
    // we'd have to use something like render to pass arguments to front end
    // result.render('Overdoses.html');

};

/*
 * POST overdose.
 */
 module.exports.overdosePost = function(req, res) 
{
    let product = new Overdose(
        {
            State: req.body.State,
            Population: req.body.Population,
            Deaths: req.body.Deaths,
            Abbrev: req.body.Abbrev
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Entry Inserted successfully')
    })
};

module.exports.overdoseUpdate = function (req, res) 
{
    //var update = JSON.parse(req.body);
    Overdose.findByIdAndUpdate(req.params.id, { $set: req.body}, function (err, Overdose) {
        if (err) return next(err);
        res.send(req.body);
    });
};

module.exports.overdoseDelete = function(req, res) 
{
    Overdose.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

/*
 * GET about us.
 */
module.exports.aboutUs = function(request, result) 
{
    Overdose.find({}, function(err, results){
        //var x= results;
        // console.log("hitting overdoseGet"+results);
        result.render('aboutUs', {data : "about Us test data"  });
        // result.render('Overdoses', {data : "kkk"});
        
        });
        //result.sendFile('Overdoses.html',{ root: "./app_server/views" });
        // result.render('Overdoses');
         
};


