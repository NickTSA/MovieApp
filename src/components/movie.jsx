import React from "react";
import { titleLimit } from "../utilis/utilities";
import { Link } from "react-router-dom";

function Movie(props) {
  let { title, posterPath, _id } = props.movie;
  const movieImage = "https://image.tmdb.org/t/p/w500/" + posterPath;
  title = titleLimit(title, 20);

  // let mobile = window.innerWidth < 1000 ? 0.85 : 1;

  return (
    <Link to={`movies/${_id}`}>
      <div
        className="movie"
        // style={{
        //   width: 177,
        //   marginLeft: 20,
        //   marginRight: 20,
        //   marginBottom: 30,
        //   cursor: "pointer"
        // }}
      >
        <div
          style={{ color: "black", textDecoration: "none" }}
          className="text-center mt-2 font-weight-light"
        >
          <img
            className="movie-image"
            // style={{ width: 177 }}
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
