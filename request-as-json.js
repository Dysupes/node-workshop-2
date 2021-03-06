// // Creating our own callback-receiving function (higher-order function)

// //     Create a file called request-as-json.js
// //     In it, create a function called requestJson that takes a URL and a callback 
// function as parameters.
// //     In your function, do the following:
// //         Using the request library, make a request to the URL that you were provided.
// //         When you receive the response: a. If there is an error, call the callback function 
// and pass it the error as the first parameter b. If there is no error, move to step 3
// //         Use JSON.parse inside a try/catch block to parse the response: a. If there was 
// an error parsing JSON, call the callback function and pass it the same error as the first parameter 
//b. If there was no error parsing the JSON, call the callback function and pass it a null error 
//as the first parameter, and the parsed response as the second parameter

var request = require('request');

function callbackFunction(err, res) {
    if(err){
        console.log("Error");
    }
    else {
        console.log("No error!");
    }
};
    

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

requestJson('http://www.google.com', callbackFunction);

