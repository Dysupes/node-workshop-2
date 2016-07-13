var SynonymMaker = require('../get-synonyms.js');
var prompt = require('prompt');
var synonym = new SynonymMaker('e9848ae132571b1842b6c7c98e428530');
prompt.start();
prompt.get('userWord', function(err, content){
        if(err){
        console.log('You have encountered an error.');
        } else{
            console.log(content.userWord);
            synonym.get(content.userWord, function(err, result){
                if(err){
                    console.log(err);
                }
                    console.log('Here are the synonyms of ' + content.userWord + ' : ' + result.adjective.syn);
                    console.log('Here are the antonyms of ' + content.userWord + ' : ' + result.adjective.ant);
            });
            
        }
});