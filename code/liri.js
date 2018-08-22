require("dotenv").config(); 
var  Spotify = require("node-spotify-api");
var  Bands = require("bandsintown-events");
var  keys = require("./keys");
var  spotify = new Spotify(keys.spotify);
var  bands = new Bands(keys.bandsInTown);
var  fs = require("fs");
var  request = require("request");
var  searchSpotify = require("./spotify.js");
var  searchOMDB = require("./omdb.js");
var  searchBands = require("./bands.js");
var moment = require('moment');

// users input
var input = process.argv[2];
var arg = process.argv[3];


switch (input) {
	case "spotify-this-song":
		searchSpotify.spotifySong(arg);
		break;
	case "movie-this":
		searchOMDB.omdbMovie(arg);
		break;
	case "concert-this":
		searchBands.get_concerts(arg);
		break;
	case "do-what-it-says":
		liri_says();
		break;
};