var SynonymMaker = require('../get-synonyms.js');
var prompt = require('prompt');
var emoji = require('node-emoji');
var colors = require('colors');
var synonym = new SynonymMaker('e9848ae132571b1842b6c7c98e428530');
prompt.start();
prompt.get('userWord', function(err, content){
        if(err){
        console.log((emoji.emojify('You have encountered an error. :grimacing:')));
        } else{
            console.log(content.userWord);
            synonym.get(content.userWord, function(err, result){
                if(err){
                    console.log(err);
                }
                    console.log((emoji.emojify(':stuck_out_tongue_winking_eye:' + 'Here are the synonyms of '.rainbow + content.userWord.rainbow + ' : '.rainbow + result.adjective.syn + ':laughing:')));
                    console.log((emoji.emojify(':grimacing:' + 'Here are the antonyms of '.rainbow + content.userWord.rainbow + ' : '.rainbow + result.adjective.ant + ":cold_sweat:")));
            });
            
        }
});