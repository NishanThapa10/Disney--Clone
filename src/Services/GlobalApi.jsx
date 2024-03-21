import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = 'acdc2cd20b59d84f84015b957041dcd6';

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=acdc2cd20b59d84f84015b957041dcd6';


const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

    
export default {
  getTrendingVideos,
  getMovieByGenreId
};







// https://api.themoviedb.org/3/movie/550?api_key=acdc2cd20b59d84f84015b957041dcd6