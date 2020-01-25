import React from "react";

function LoadingBar() {
  return (
    <div style={{ marginLeft: "44%", marginTop: "100px" }}>
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </button>
    </div>
  );
}

export default LoadingBar;
