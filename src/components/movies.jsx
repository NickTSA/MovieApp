import React from "react";
import Movie from "./movie";

function Movies(props) {
  const { movies, heading } = props;

  return (
    <>
      <h3 className="heading mb-4" style={{ textAlign: "center" }}>
        {heading}
      </h3>
      <div className="movies" style={{ display: "flex" }}>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
      {movies.length === 0 ? <h4>No results found.</h4> : null}
    </>
  );
}

export default Movies;
