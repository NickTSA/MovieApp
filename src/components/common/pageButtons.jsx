import React from "react";
import { Link } from "react-router-dom";

function PageButtons(props) {
  const { pageChange, activePage, totalPages } = props;
  const backButon = activePage > 1 ? "" : " d-none";

  const nextButton = activePage === totalPages ? " d-none" : "";

  return (
    <nav aria-label="Page navigation example">
      <ul className="d-flex justify-content-around pagination">
        <li className="page-item">
          <Link
            to={`${activePage - 1}`}
            className={"page-link" + backButon}
            name="back"
            onClick={e => pageChange(e.target.name)}
          >
            {`< Page ${activePage - 1}`}
          </Link>
        </li>
        <li className="page-item">
          <Link
            to={`${activePage + 1}`}
            className={"page-link" + nextButton}
            name="next"
            onClick={e => pageChange(e.target.name)}
          >
            Page {activePage + 1} >
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageButtons;
