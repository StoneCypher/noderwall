
/*jshint node:true*/
// noderwall.js

'use strict';

var app     = require('commander'),
    httpreq = require('httpreq');

app.version('0.0.1')
   .option('-u, --user [user string]', 'Coderwall username to fetch')
   .parse(process.argv);





function NoderwallFetchUser() {

    if (!(app.user)) {
        console.log('\nError: Must set a user.\n\n  Usage: noderwall -u JohnHaugeland');
        return;
    }

    httpreq.get('http://www.coderwall.com/johnhaugeland.json', function (err, res){
    
        if (err) return console.log(err);

        console.log(JSON.parse(res.body));

    });

}





exports.noderwall = { user: NoderwallFetchUser };

NoderwallFetchUser();
