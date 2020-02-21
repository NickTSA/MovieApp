import React from "react";
import { titleLimit } from "../utilis/utilities";
import { Link } from "react-router-dom";
import moviePlaceholder from "../utilis/moviePlaceholder.png";

function Movie(props) {
  let { title, poster_path, id } = props.movie;
  let movieImage = "https://image.tmdb.org/t/p/w500/" + poster_path;
  title = titleLimit(title, 20);
  if (poster_path === null) {
    movieImage = moviePlaceholder;
  }

  return (
    <Link to={`movies/${id}`}>
      <div
        className="movie"
        style={{
          width: 177,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 30,
          cursor: "pointer"
        }}
      >
        <div
          style={{ color: "black", textDecoration: "none" }}
          className="text-center mt-2 font-weight-light"
        >
          <img
            className="movie-image"
            style={{ width: 177, height: 266 }}
            src={movieImage}
            alt="movie poster"
          />
          {title}
        </div>
      </div>
    </Link>
  );
}

export default Movie;
