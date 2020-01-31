import React from "react";

function MovieTrailer({ src }) {
  return (
    <div
      style={{ maxWidth: 1000, margin: "auto" }}
      class="embed-responsive embed-responsive-16by9"
    >
      <iframe
        class="embed-responsive-item"
        title="Movie Trailer"
        src={"https://www.youtube.com/" + src}
        allowfullscreen="true"
      />
    </div>
  );
}

export default MovieTrailer;
