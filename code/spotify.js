require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var request = require("request");
var moment = require('moment');

module.exports.spotifySong = () => {
    var title = process.argv[3];
    log('\n Your search is: ' + title);
}