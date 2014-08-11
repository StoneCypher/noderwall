
/*jshint node:true*/
// noderwall.js

'use strict';

var app     = require('commander'),
    httpreq = require('httpreq'),
    chalk   = require('chalk');

app.version('0.0.1')
   .option('-u, --user [user string]', 'Coderwall username to fetch')
   .parse(process.argv);





function noderwallFetchUser(user, callback) {

    var newUrl = 'https://www.coderwall.com/' + user.replace(/a-zA-Z0-9-_/) + '.json';
    console.log(newUrl);

    httpreq.get(newUrl, function (err, res){    
        if (err) return console.log('error: ' + err.toString());
        callback(JSON.parse(res.body));
    });

}





function noderwallConsole() {

    if (!(app.user)) {
        console.log( chalk.red.bold('\nError: Must set a user.') );
        console.log( chalk.white.bold('  Usage: noderwall -u JohnHaugeland') );
        return;
    }

    noderwallFetchUser(app.user, function(UData) { 
        console.log(JSON.stringify(UData));
    });

}





exports.noderwall = { byUser: noderwallFetchUser };

noderwallConsole();
