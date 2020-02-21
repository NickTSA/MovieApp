import React from "react";
import PropTypes from "prop-types";

function PageButtons(props) {
  const { pageChange, activePage, totalPages } = props;
  const backButon =
    activePage < totalPages && activePage !== 1 ? "" : " d-none";

  console.log(activePage);
  return (
    <nav aria-label="Page navigation example">
      <ul className="d-flex justify-content-around pagination">
        <li className="page-item">
          <button
            className={"page-link" + backButon}
            name="back"
            onClick={e => pageChange(e.target.name)}
          >
            {"< Back"}
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            name="next"
            onClick={e => pageChange(e.target.name)}
          >
            Next >
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
