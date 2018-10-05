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
    result.sendFile('amogh.html',{ root: "./app_server/views" });
};



/*
 * GET amogh details.
 */
module.exports.divya = function(request, result) 
{
    result.sendFile('divya.html',{ root: "./app_server/views" });
};



/*
 * GET amogh details.
 */
module.exports.indira = function(request, result) 
{
    result.sendFile('indira.html',{ root: "./app_server/views" });
};



/*
 * GET amogh details.
 */
module.exports.vijay = function(request, result) 
{
    result.sendFile('vijay.html',{ root: "./app_server/views" });
};


