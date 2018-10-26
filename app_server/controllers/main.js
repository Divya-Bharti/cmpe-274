/*
 * GET home page.
 */
module.exports.home = function(request, result) 
{
    result.sendFile('index.html',{ root: "./app_server/views" });
};

/*
 * GET feedback.
 */
module.exports.get_feedback = function(request, result) 
{
    result.sendFile('feedback.html',{ root: "./app_server/views" });
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
    result.sendFile('StateVsDeath.html',{ root: "./app_server/views" });
};

/*
 * GET StateVsPop.
 */
module.exports.StateVsPop = function(request, result) 
{
    result.sendFile('StateVsPop.html',{ root: "./app_server/views" });
};

/*
 * GET heatmap.
 */
module.exports.heatmap = function(request, result) 
{
    result.sendFile('heatmap.html',{ root: "./app_server/views" });
};


/*
 * GET about us.
 */
module.exports.aboutUs = function(request, result) 
{
    result.sendFile('aboutUs.html',{ root: "./app_server/views" });
};


/*
 * GET drug names.
 */
module.exports.drugName = function(request, result) 
{
    result.sendFile('drugName.html',{ root: "./app_server/views" });
};


/*
 * GET drag and drop page
 */
module.exports.dragDrop = function(request, result)
{
    result.sendFile('dragDrop.html', { root: "./app_server/views"});
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
    console.log("hitting overdoseGet"+results);
    
});
    result.sendFile('Overdoses.html',{ root: "./app_server/views" });
	// we'd want to pass this above "result" json to out html to display.. so sendFile wont wont work anymore,
    //we'd have to use something like render to pass arguments to front end
    //result.render('Overdoses.html');
};

/*
 * POST overdose.
 */
 
module.exports.overdosePost = function(request, result) 
{
    //fill code
};


