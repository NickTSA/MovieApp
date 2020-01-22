import React from "react";
import { titleLimit } from "../utilis/utilities";

function Movie(props) {
  let { title, posterPath } = props.movie;
  const movieImage = "https://image.tmdb.org/t/p/w500/" + posterPath;
  title = titleLimit(title, 20);

  return (
    <div
      style={{
        width: 177,
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "30px"
      }}
    >
      <img style={{ width: 177 }} src={movieImage} alt="movie poster" />
      <div className="text-center mt-2 font-weight-light">{title}</div>
    </div>
  );
}

export default Movie;
