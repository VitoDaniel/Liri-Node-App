require("dotenv").config();
var request = require("request");
var fs = require("fs");
var moment = require('moment');



module.exports.omdbMovie = (movieName) => {
    if (!movieName) {
        movieName = "Mr. Nobody"; //default movie

    } else {
        movieName = process.argv[3];
    }


    var omdb = `http://www.omdbapi.com/?t=${movieName}&plot=full&tomatoes=true&apikey=trilogy`

    // sending request to omdb
    request(omdb, (error, respons, body)=> {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
           console.log("Movie Database Results:")
           console.log("==========================") 
           console.log(`Movie Title: ${data.Title}`);
           console.log(`Release Year: ${data.Year}`);
           console.log(`IMDB Rating: ${data.imdbRating}`);
           console.log(`Rotten Tomatoes Rating: ${data.Ratings[1].Value}`);
           console.log(`Produced in: ${data.Country}`);
           console.log(`Spoken Language(s): ${data.Language}`);
           console.log(`Plot Summary: ${data.Plot}`);
           console.log(`Cast: ${data.Actors}`);
           console.log(`~~~~~~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~~~~`);
           fs.appendFile('log.txt', (`\r\n ========IMDB======== \r\n Movie Title: ${data.Title} \r\n Release Year: ${data.Year} 
           \r\n Rating: ${data.imdbRating} \r\n Rating: ${data.Ratings[1].Value} \r\n Country of origin: ${data.Country} \r\n 
           Language: ${data.Language} \r\n Plot: ${data.Plot} \r\n Actors: ${data.Actors} \r\n ================= \r\n`), function (error) {
            if (error) throw error;
           });
        }
    });
};







var movieSearch = function(input){ 
    if (input === undefined || input === "") {
        input = "Mr. Nobody";
    }
    var title = encodeURI(input);
    request(`http://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=trilogy`, function(error, response, body) {

  if (!error && response.statusCode === 200) {
      var data = JSON.parse(body);
    console.log(`Movie Title: ${data.Title}`);
    console.log(`Release Year: ${data.Year}`);
    console.log(`IMDB Rating: ${data.imdbRating}`);
    console.log(`Rotten Tomatoes Rating: ${data.Ratings[1].Value}`);
    console.log(`Produced in: ${data.Country}`);
    console.log(`Spoken Language(s): ${data.Language}`);
    console.log(`Plot Summary: ${data.Plot}`);
    console.log(`Cast: ${data.Actors}`);
  }
});}

module.exports = {
    movieSearch: movieSearch
};