import React, { useState, useEffect } from "react";
import Pages from "../Pages/Pages";
import { useParams } from "react-router-dom";
import { UPCOMING_LAUNCH_URL, PAST_LAUNCH_URL } from "../URLs";
import {
  renderFutureTableData,
  renderPastTableData,
  futureHeaderName,
  pastHeaderName,
} from "./renderTableFuncs";

const Launch = () => {
  const { timearea } = useParams();
  const [launchTable, setLaunchTable] = useState({
    fetchURL: "",
    headerName: [],
    renderTableData: null,
  });

  useEffect(() => {
    if (timearea === "future") {
      setLaunchTable({
        ...launchTable,
        fetchURL: UPCOMING_LAUNCH_URL,
        headerName: futureHeaderName,
        renderTableData: renderFutureTableData,
      });
    } else {
      setLaunchTable({
        ...launchTable,
        fetchURL: PAST_LAUNCH_URL,
        headerName: pastHeaderName,
        renderTableData: renderPastTableData,
      });
    }
  }, [timearea]);

  const { headerName, renderTableData, fetchURL } = launchTable;

  return (
    <Pages
      url={timearea}
      fetchURL={fetchURL}
      headerName={headerName}
      renderTableData={renderTableData}
    ></Pages>
  );
};

export default Launch;
