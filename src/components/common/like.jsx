import React from "react";

function Like(props) {
  let classes = "fa-heart fa";
  props.isLiked ? (classes += "s") : (classes += "r");

  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      onClick={props.onLike}
    />
  );
}

export default Like;
