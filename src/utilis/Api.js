import axios from "axios";

export function getTrendingMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${
        process.env.REACT_APP_MM_KEY
      }`
    )
    .then(res => res.data);
}
