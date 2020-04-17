import React, { useEffect, useState, Fragment } from "react";
import Accordition from "../Accordition/Accordition";
import Pagination from "../Pagination/Pagination";
import { clearAccordition } from "../hooks";
import Loading from "../../giphy.gif";

const Launch = (props) => {
  const [state, setState] = useState({ isLoading: true, data: [] });
  const [pageState, setPageState] = useState({
    launchPerPage: 10,
    currentPage: 1,
  });

  const setCurrentPage = (page) => {
    setPageState({
      ...pageState,
      currentPage: page,
    });
    clearAccordition();
  };

  const numOfPages = Math.ceil(state.data.length / pageState.launchPerPage);
  const lastLaunchIndex = pageState.launchPerPage * pageState.currentPage;
  const firstLaunchIndex = lastLaunchIndex - pageState.launchPerPage;
  const currentLaunches = state.data.slice(firstLaunchIndex, lastLaunchIndex);

  useEffect(() => {
    const btnList = document.getElementsByClassName("pagination-btn");
    for (let i = 0; i < btnList.length; i++) {
      if (i + 1 === pageState.currentPage) {
        btnList[i].classList.add("btn-focus");
      } else {
        btnList[i].classList.remove("btn-focus");
      }
    }
  });

  const { currentPage } = pageState;
  const { headerName, url, renderTableData } = props;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState({ isLoading: false, data: data }))
      .catch((err) => console.log(err));
  }, []);

  return state.isLoading ? (
    <img className="loading" src={Loading} alt="" />
  ) : (
    <Fragment>
      <Accordition
        headerName={headerName}
        tableData={renderTableData(currentLaunches)}
      ></Accordition>
      <Pagination
        currentPage={currentPage}
        numOfPages={numOfPages}
        setCurrentPage={setCurrentPage}
      ></Pagination>
    </Fragment>
  );
};

export default Launch;
