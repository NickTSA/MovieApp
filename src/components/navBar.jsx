import React from "react";
import "./common/magnifying-glass.svg";

function NavBar() {
  const magnify = "d-md-none d-lg-none d-xl-block";

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div style={{ maxWidth: 1120 }} className="container-fluid">
        <a className={magnify} href="#">
          TopFlix
        </a>
        <a className="mx-sm-auto navbar-brand" href="#">
          TopFlix
        </a>
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
          <form className="mx-auto form-inline mr-md-3 my-2 my-lg-2">
            <input
              style={{ width: 300 }}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
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
