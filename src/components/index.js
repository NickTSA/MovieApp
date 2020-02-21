import React, { useState, useEffect } from "react";
import { getTrendingMovies, searchMovie } from "../utilis/Api";
import { getGenres } from "../services/fakeGenreService";
import Movies from "./movies";
import LoadingBar from "./common/loadingBar";
import PageButtons from "./common/pageButtons";

function Index(props) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [heading, setHeading] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (props.match.params.query) {
      const { query } = props.match.params;
      setIsLoading(true);
      const allGenres = [{ name: "All Genres" }, ...getGenres()];
      setGenres(allGenres);
      setHeading("Search Results");
      searchMovie(query).then(res => {
        setMovies(res.results);
        setIsLoading(false);
      });
    }
    if (!props.match.params.query) {
      setIsLoading(true);
      const allGenres = [{ name: "All Genres" }, ...getGenres()];
      setGenres(allGenres);
      setHeading("Top Trending Movies");
      getTrendingMovies(activePage).then(res => {
        setTotalPages(res.total_pages);
        setMovies(res.results);
        setIsLoading(false);
      });
    }
  }, [activePage]);

  const pageChange = btn => {
    if (btn === "next") {
      setActivePage(page => page + 1);
    } else if (btn === "back") {
      setActivePage(page => page - 1);
    }
  };

  return (
    <>
      <div style={{ maxWidth: 1146 }} className="container-fluid mt-5">
        <Movies heading={heading} movies={movies} genres={genres} />
        {isLoading ? <LoadingBar /> : null}
        <div>
          <PageButtons
            pageChange={pageChange}
            activePage={activePage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
}

export default Index;
