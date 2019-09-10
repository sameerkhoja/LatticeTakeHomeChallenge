"use strict";
exports.__esModule = true;
var host = 'https://api.themoviedb.org/3';
const API_KEY = "93657592650671874f3b3b1ac906b78f"

//Async API requests
exports.get_popular_movies = {
    method: 'GET',
    uri: host + '/discover/movie?api_key=' + API_KEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    json: true
};

exports.get_movie_by_id = (id) => ({
    method: 'GET',
    uri: host + '/movie/' + id + '?api_key=' + API_KEY,
    json: true
});

exports.poster_path_link = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
