import React from "react";
import "./Pagination.css";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage, books } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div>
      <ul className="pagination-bar">
        {currentPage === 1 ? null : (
          <li>
            <a href="/#" onClick={() => onPageChange(currentPage - 1)}>
              &lsaquo; previus
            </a>
          </li>
        )}

        {pages.map((page) => (
          <li className={page === currentPage ? "active" : ""} key={page}>
            <a href="/#" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}

        {books === 0 || currentPage === pages.length ? null : (
          <li>
            <a href="/#" onClick={() => onPageChange(currentPage + 1)}>
              next &rsaquo;
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
