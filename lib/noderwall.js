
/* jshint node: true */
/* eslint-env node */

"use strict";

var httpreq = require("httpreq");





function noderwallFetchUser(user, callback) {

    var newUrl = "https://www.coderwall.com/" + user.replace(/a-zA-Z0-9-_/) + ".json";
    console.log(newUrl);

    httpreq.get(newUrl, function (err, res) {    
        if (err) { return console.log("error: " + err.toString()); }
        callback(JSON.parse(res.body));
    });

}





exports.byUser = noderwallFetchUser;
