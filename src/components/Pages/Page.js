import React from "react";
import { renderTableHeader } from "../utils";

const Page = (props) => {
  const { tableData, headerName } = props;

  return (
    <div className="page">
      {tableData && (
        <table className="page__table">
          <tbody>
            {renderTableHeader(headerName)}
            {tableData}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Page;
