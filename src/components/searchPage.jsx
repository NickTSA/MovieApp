import React, { useState, useEffect } from "react";
import { searchMovie } from "../utilis/Api";
import Movies from "./movies";
import LoadingBar from "./common/loadingBar";
import PageButtons from "./common/pageButtons";

function SearchPage(props) {
  const [movies, setMovies] = useState([]);
  const [heading, setHeading] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (props.match.params.query) {
      const { query } = props.match.params;
      setIsLoading(true);
      searchMovie(query, activePage).then(res => {
        setHeading(res.total_results.toString() + " Movies Found");
        setTotalPages(res.total_pages);
        setMovies(res.results);
        setIsLoading(false);
      });
    }
  }, [activePage, props.match.params]);

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
        <Movies heading={heading} movies={movies} />
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

export default SearchPage;
