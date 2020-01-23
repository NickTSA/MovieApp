import React, { useState, useEffect } from "react";
import ListGroup from "./common/listGroup";
import Movie from "./movie";

function Movies(props) {
  const { movies, genres, pagMovies } = props;

  if (movies.length === 0) return <p>There are no movies in the database.</p>;

  return (
    <div className="row d-flex justify-content-center">
      {/* <p>Showing {filtered.length} movies in the database.</p> */}
      {pagMovies.map(movie => (
        <Movie key={movie._id} movie={movie} />
      ))}
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


  function handleDelete(movie) {
    const newMovies = movies.filter(m => m._id !== movie._id);
    setMovies(newMovies);
  }


<div className="px-4">
<ListGroup
selectedItem={selectedGenre}
onItemSelect={handleGenreSelect}
items={genres}
/>
</div>

function handleLike(movie) {
  const newMovies = [...movies];
  const index = newMovies.indexOf(movie);
  newMovies[index].liked = !newMovies[index].liked;
  setMovies(newMovies);
}

<Pagination
onPageChange={handlePageChange}
currentPage={currentPage}
itemsCount={filtered.length}
pageSize={pageSize}
/> */
