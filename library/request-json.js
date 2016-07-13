var request = require('request');

function requestJson(url,callback){
    request(url, function(err, res){
        if(err){
            callback(err);
        } else {
            try {
                var parseBody = JSON.parse(res.body);
                callback(null,parseBody);
            } catch(err) {
                callback(err);
            }        
        }
    });
}



module.exports = {
    requestJson: requestJson
};