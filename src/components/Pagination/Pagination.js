import React from "react";

const Pagination = ({ currentPage, numOfPages, setCurrentPage }) => {
  const onPrevPageClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPageClick = () => {
    if (currentPage < numOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={onPrevPageClick}>&laquo;</button>
      {Array(numOfPages)
        .fill(null)
        .map((page, index) => (
          <button
            className="pagination-btn"
            key={index}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      <button onClick={onNextPageClick}>&raquo;</button>
    </div>
  );
};

export default Pagination;
