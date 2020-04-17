import React from "react";
import { renderTableHeader } from "../hooks";

const Accordition = (props) => {
  const { tableData, headerName } = props;

  return (
    <div className="accordition">
      {tableData && (
        <table className="accordition__table">
          <tbody>
            {renderTableHeader(headerName)}
            {tableData}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Accordition;
