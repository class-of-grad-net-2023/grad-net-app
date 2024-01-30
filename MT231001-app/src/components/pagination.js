// Pagination.js
import React from "react";

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const displayPageCount = 5;

  for (
    let i = Math.max(1, currentPage - Math.floor(displayPageCount / 2));
    i <= Math.min(totalPages, currentPage + Math.floor(displayPageCount / 2));
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {currentPage > 1 && (
          <div className="page-item-prev">
            <a
              onClick={() => paginate(currentPage - 1)}
              href="#!"
              className="page-link"
            >
              {"<"}
            </a>
          </div>
        )}

        {pageNumbers.map((number) => (
          <div
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </div>
        ))}

        {currentPage < totalPages && (
          <div className="page-item-next">
            <a
              onClick={() => paginate(currentPage + 1)}
              href="#!"
              className="page-link"
            >
              {">"}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Pagination;