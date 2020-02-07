import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div style={{ maxWidth: 1120 }} className="container-fluid">
        <Link to={"/"}>
          <span className="navbar-brand">TopFlix</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

/*
<a class="dropdown-item" href="#">
All Movies
</a>
<a class="dropdown-item" href="#">
Action
</a>
<a class="dropdown-item" href="#">
Adventure
</a>
<a class="dropdown-item" href="#">
Comedy
</a>
<a class="dropdown-item" href="#">
Crime/Gangster
</a>
<a class="dropdown-item" href="#">
Drama
</a>
<a class="dropdown-item" href="#">
Horror
</a>
<a class="dropdown-item" href="#">
Musical/Dance
</a>
<a class="dropdown-item" href="#">
Sci-Fi
</a>
<a class="dropdown-item" href="#">
War
</a>
<a class="dropdown-item" href="#">
Western
</a>
*/
