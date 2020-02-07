import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function Search(props) {
  const [userInput, setUserInput] = useState("");
  const [movieSearch, setMovieSearch] = useState(null);

  const onChange = e => {
    setUserInput(e.target.value);
  };

  const encodedQuery = encodeURI(movieSearch);

  const findMovie = () => {
    setMovieSearch(userInput);
  };

  return (
    <>
      {movieSearch ? <Redirect to={`/Search/${encodedQuery}`} /> : null}
      <form
        className="mx-auto form-inline mr-md-3 my-2 my-lg-2"
        onSubmit={findMovie}
      >
        <input
          style={{ width: 250 }}
          className="form-control mr-2"
          type="search"
          placeholder="Search Movies"
          aria-label="Search"
          name="userInput"
          value={userInput}
          onChange={onChange}
        />
      </form>
    </>
  );
}
