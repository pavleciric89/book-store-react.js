import React from "react";
import "./Pagination.css";
import _ from "lodash";
import { v1 as uuidv1 } from "uuid";

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
            <p onClick={() => onPageChange(currentPage - 1)}>
              &lsaquo; previus
            </p>
          </li>
        )}

        {pages.map((page) => (
          <li className={page === currentPage ? "active" : ""} key={uuidv1()}>
            <p onClick={() => onPageChange(page)}>{page}</p>
          </li>
        ))}

        {books === 0 || currentPage === pages.length ? null : (
          <li>
            <p onClick={() => onPageChange(currentPage + 1)}>next &rsaquo;</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
