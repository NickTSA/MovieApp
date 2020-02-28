import React from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PageButtons(props) {
  const { pageChange, activePage, totalPages } = props;
  const backButon = activePage > 1 ? "" : " d-none";

  const nextButton = activePage === totalPages ? " d-none" : "";

  const linkTo = () => {
    params = useParams();
    if (params.query) {
      return `/Search/${params.query}`;
    } else {
      return "";
    }
  };

  linkTo();

  return (
    <nav aria-label="Page navigation example">
      <ul className="d-flex justify-content-around pagination">
        <li className="page-item">
          <Link
            to={`${linkTo()}/${activePage - 1}`}
            className={"page-link" + backButon}
            name="back"
            onClick={e => pageChange(e.target.name)}
          >
            {`< Page ${activePage - 1}`}
          </Link>
        </li>
        <li className="page-item">
          <Link
            to={`${linkTo()}/${activePage + 1}`}
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

PageButtons.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default PageButtons;
