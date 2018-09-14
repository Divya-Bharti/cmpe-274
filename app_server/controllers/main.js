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
module.exports.feedback = function(request, result) 
{
    result.sendFile('feedback.html',{ root: "./app_server/views" });
};

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