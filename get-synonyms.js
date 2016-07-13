var request = require('request');
var baseUrl = 'http://words.bighugelabs.com/api/2/';
function requestJson(key) {
  this.apiKey = key
}
requestJson.prototype.get = function get(word, callback){
var url = baseUrl + this.apiKey + '/' +  word + '/json';
    request(url, function(err, res, body){
        if(err){
            console.log('error', err);
            callback(err);
        }
        try  {
          var data = JSON.parse(body);
            callback(null,data);
        }
        catch(e) {
            console.log('malformed request', body);
            callback(e);
        }
       
    })
};

module.exports = requestJson;

//e9848ae132571b1842b6c7c98e428530/