import React, { useState, useEffect } from "react";
// import { getMovies } from "../services/fakeMovieService";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utilis/paginate";
// import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { getTrendingMovies } from "../utilis/Api";
import Movie from "./movie";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [pageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState();

  function handleDelete(movie) {
    const newMovies = movies.filter(m => m._id !== movie._id);
    setMovies(newMovies);
  }

  useEffect(() => {
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
      .then(res => setMovies(res));
  }, []);

  console.log(movies);

  function handleLike(movie) {
    const newMovies = [...movies];
    const index = newMovies.indexOf(movie);
    newMovies[index].liked = !newMovies[index].liked;
    setMovies(newMovies);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleGenreSelect(genre) {
    setSelectedGenre(genre);
    setCurrentPage(1);
  }

  if (movies.length === 0) return <p>There are no movies in the database.</p>;

  const filtered =
    selectedGenre && selectedGenre._id
      ? movies.filter(m => m.genre._id === selectedGenre._id)
      : movies;

  const pagMovies = paginate(filtered, currentPage, pageSize);

  return (
    <div className="row">
      <div className="px-4">
        <ListGroup
          selectedItem={selectedGenre}
          onItemSelect={handleGenreSelect}
          items={genres}
        />
      </div>
      <div className="col">
        <p>Showing {filtered.length} movies in the database.</p>
        <div className="row">
          {pagMovies.map(movie => (
            <Movie key={movie._id} movie={movie} />
          ))}
        </div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          itemsCount={filtered.length}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default Movies;

/*
<tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    isLiked={movie.liked}
                    onLike={() => handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              */
