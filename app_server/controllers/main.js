/*
 * GET home page.
 */
module.exports.home = function(request, result) 
{
    result.sendFile('index.html',{ root: "./app_server/views" });
};