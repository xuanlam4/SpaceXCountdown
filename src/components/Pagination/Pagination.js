import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ currentPage, numOfPages, url }) => {
  return (
    <div className="pagination">
      <NavLink to={currentPage > 1 && `/${url}/${currentPage - 1}`}>
        &laquo;
      </NavLink>
      {Array(numOfPages)
        .fill(null)
        .map((page, index) => (
          <NavLink
            to={`/${url}/${index + 1}`}
            exact={true}
            activeStyle={{
              color: "#d9d9d9",
              backgroundColor: "#292a2e",
              borderRadius: "5px",
              border: "none",
            }}
          >
            {index + 1}
          </NavLink>
        ))}
      <NavLink to={currentPage < numOfPages && `/${url}/${currentPage + 1}`}>
        &raquo;
      </NavLink>
    </div>
  );
};

export default Pagination;
