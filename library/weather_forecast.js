var weatherTracker = require('./request-json.js').requestJson;
var prompt = require('prompt');
var promptURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var colors = require('colors');
var cli_table = require('cli-table');
var node_emoji = require('node-emoji');


prompt.get('userLocation', function(err, content){
    if(err){
        console.log('You have encountered an error.');
    }
    else {
        var locationURL = promptURL + content.userLocation;
            
        weatherTracker(locationURL, function(err, res){
            if(err){
                console.log("There was an error!");
            } 
            else {
                var parsedUserLocation = res;
                var userLatitude = parsedUserLocation.results[0].geometry.location.lat;
                //console.log('The user\'s latitude is: ' + userLatitude);
                var userLongitude = parsedUserLocation.results[0].geometry.location.lng;
                var forecastAPI = 'https://api.forecast.io/forecast/a2a1f50cf5886183b67095cc306dde7e/' + userLatitude + ',' + userLongitude;
                //console.log('The user\'s longitude is: ' + userLongitude);
                weatherTracker(forecastAPI, function(err, res){
                    if(err){
                        console.log('You have encountered an error.'); 
                    }
                    else {
                        var userWeather = res;
                        var userForecast = userWeather.daily.data.slice(1,6).map(
                            function(daysNum){
                                return daysNum.summary;
                            });
                        console.log("The weather for today is: " + userWeather.daily.data[0].summary);    
                        console.log("The weather for the next few days is: ");
                        console.log(userForecast);
                       
                    
                        
                    };   
                });    
            }
        })
    }
});

