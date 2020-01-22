import React from "react";
import Movies from "./movies";
import Movie from "../components/movie";

function App() {
  return (
    <main style={{ maxWidth: 1500 }} className="container-fluid mt-5">
      {/* <Movie /> */}
      <Movies />
    </main>
  );
}

export default App;
