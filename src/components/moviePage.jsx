import React, { useState, useEffect } from "react";
import { getMovieData, getTrailer } from "../utilis/Api";
import Moment from "react-moment";
import LoadingBar from "./common/loadingBar";
import videoPlaceholder from "../utilis/videoPlaceholder.png";

function MoviePage(props) {
  let movieId = props.match.params.id;
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getMovieData(movieId)
      .then(res => {
        setMovie(res);

        return getTrailer(movieId);
      })
      .then(res => {
        if (res.results[0] === undefined) {
          setTrailer(null);
        } else {
          setTrailer(res.results[0].key);
        }
        setIsLoading(false);
      });
  }, [movieId]);

  const movieTrailer = trailer ? (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${trailer}?rel=0`}
        allowFullScreen={true}
        title="Movie Trailer"
      />
    </div>
  ) : (
    <img
      className="embed-responsive embed-responsive-16by9"
      src={videoPlaceholder}
      alt="movie trailer"
    />
  );

  return (
    <div className="mt-5">
      {isLoading ? <LoadingBar /> : null}
      <div className="card" style={{ maxWidth: 800 }}>
        <div className="card-header">
          <h2>{movie.title || movie.name || movie.orginal_title}</h2>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{movieTrailer}</li>
          <li className="list-group-item">
            <span className="overview">Overview : </span>
            <p className="overview-p">
              <br />
              {movie.overview}
            </p>
          </li>
          <li className="list-group-item">
            <span>Release Date : </span>
            <Moment format="MM/DD/YYYY">{movie.release_date}</Moment>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoviePage;
