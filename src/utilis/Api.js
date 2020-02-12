import axios from "axios";
import { func } from "prop-types";

export async function getTrendingMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${
        process.env.REACT_APP_MM_KEY
      }`
    )
    .then(res => res.data)
    .catch(err => console.log(err));
}

export async function getMovieData(movie_id) {
  return axios
    .get(
      `
  https://api.themoviedb.org/3/movie/${movie_id}?api_key=${
        process.env.REACT_APP_MM_KEY
      }&language=en-US`
    )
    .then(res => res.data)
    .catch(err => console.log(err));
}

export async function getTrailer(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${
        process.env.REACT_APP_MM_KEY
      }&language=en-US`
    )
    .then(res => res.data)
    .catch(err => console.log(err));
}

export async function searchMovie(encodedQuery) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.REACT_APP_MM_KEY
      }&language=en-US&query=${encodeURI(
        encodedQuery
      )}&page=1&include_adult=false`
    )
    .then(res => res.data)
    .catch(err => console.log(err));
}
