import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../utilis/Api";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utilis/paginate";
import Movies from "./movies";
import LoadingBar from "./common/loadingBar";

function Index() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState();
  const [heading, setHeading] = useState("Top Trending Movies");
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
    setIsLoading(true);
    const allGenres = [{ name: "All Genres" }, ...getGenres()];

    setGenres(allGenres);
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
      })
      .then(setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? <LoadingBar /> : null}
      <div style={{ maxWidth: 1146 }} className="container-fluid mt-5">
        <Movies
          heading={heading}
          pagMovies={pagMovies}
          movies={pagMovies}
          genres={genres}
        />
      </div>
    </>
  );
}

export default Index;
