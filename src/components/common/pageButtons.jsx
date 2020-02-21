import React from "react";
import PropTypes from "prop-types";

function PageButtons(props) {
  const { pageChange, activePage, totalPages } = props;
  const backButon = activePage > 1 ? "" : " d-none";

  const nextButton = activePage === totalPages ? " d-none" : "";

  return (
    <nav aria-label="Page navigation example">
      <ul className="d-flex justify-content-around pagination">
        <li className="page-item">
          <button
            className={"page-link" + backButon}
            name="back"
            onClick={e => pageChange(e.target.name)}
          >
            {`< Page ${activePage - 1}`}
          </button>
        </li>
        <li className="page-item">
          <button
            className={"page-link" + nextButton}
            name="next"
            onClick={e => pageChange(e.target.name)}
          >
            Page {activePage + 1} >
          </button>
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
