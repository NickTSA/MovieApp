import axios from "axios";

export async function getTrendingMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${
        process.env.REACT_APP_MM_KEY
      }`
    )
    .then(res => res.data);
}
