import React, { useState, useEffect } from "react";
import { getTrendingMovies, searchMovie } from "../utilis/Api";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utilis/paginate";
import Movies from "./movies";
import LoadingBar from "./common/loadingBar";

function Index(props) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState();
  const [heading, setHeading] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filtered =
    selectedGenre && selectedGenre._id
      ? movies.filter(m => m.genre._id === selectedGenre._id)
      : movies;

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleGenreSelect(genre) {
    setSelectedGenre(genre);
    setCurrentPage(1);
  }

  const pagMovies = paginate(filtered, currentPage, pageSize);

  useEffect(() => {
    if (props.match.params.query) {
      const { query } = props.match.params;
      console.log("search effect run");
      setIsLoading(true);
      const allGenres = [{ name: "All Genres" }, ...getGenres()];
      setGenres(allGenres);
      setHeading("Search Results");
      searchMovie(query)
        .then(res => {
          return res.results.map(m => ({
            title: m.title || m.name,
            _id: m.id,
            genre: m.genre_ids,
            numberInStock: 1,
            dailyRentalRate: 1,
            publishDate: m.release_date,
            posterPath: m.poster_path
          }));
        })
        .then(res => {
          setMovies(res);
          setIsLoading(false);
        });
    }
    if (!props.match.params.query) {
      console.log("trending effect run");
      setIsLoading(true);
      const allGenres = [{ name: "All Genres" }, ...getGenres()];
      setGenres(allGenres);
      setHeading("Top Trending Movies");
      getTrendingMovies()
        .then(res => {
          return res.results.map(m => ({
            title: m.title || m.name,
            _id: m.id,
            genre: m.genre_ids,
            numberInStock: 1,
            dailyRentalRate: 1,
            publishDate: m.release_date,
            posterPath: m.poster_path
          }));
        })
        .then(res => {
          setMovies(res);
          setIsLoading(false);
        });
    }
  }, [props.match.params]);

  console.log(props.match.params.query);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const allGenres = [{ name: "All Genres" }, ...getGenres()];
  //   setGenres(allGenres);

  //     getTrendingMovies()
  //     .then(res => {
  //       return res.results.map(m => ({
  //         title: m.title || m.name,
  //         _id: m.id,
  //         genre: m.genre_ids,
  //         numberInStock: 1,
  //         dailyRentalRate: 1,
  //         publishDate: m.release_date,
  //         posterPath: m.poster_path
  //       }));
  //     })
  //     .then(res => {
  //       setMovies(res);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <>
      <div style={{ maxWidth: 1146 }} className="container-fluid mt-5">
        <Movies
          heading={heading}
          pagMovies={pagMovies}
          movies={pagMovies}
          genres={genres}
        />
        {isLoading ? <LoadingBar /> : null}
      </div>
    </>
  );
}

export default Index;
