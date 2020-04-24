import React, { useEffect, useState, Fragment } from "react";
import Page from "./Page";
import Pagination from "../Pagination/Pagination";
import { useParams } from "react-router-dom";
import { clearAccordition } from "../utils";
import Loading from "../../giphy.gif";

const Pages = ({ url, fetchURL, headerName, renderTableData }) => {
  const [state, setState] = useState({
    isLoading: true,
    data: [],
  });

  const [pageState, setPageState] = useState({
    launchPerPage: 10,
    currentPage: 1,
  });

  const setCurrentPage = (pageNumber) => {
    setPageState({
      ...pageState,
      currentPage: pageNumber,
    });
    clearAccordition();
  };

  const { page } = useParams();

  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) =>
        setState({
          isLoading: false,
          data: data,
        })
      )
      .catch((err) => console.log(err));
  }, [fetchURL]);

  useEffect(() => {
    if (page) {
      setCurrentPage(parseInt(page));
    }
    const btnList = document.getElementsByClassName("pagination-btn");
    for (let i = 0; i < btnList.length; i++) {
      if (i + 1 === pageState.currentPage) {
        btnList[i].classList.add("btn-focus");
      } else {
        btnList[i].classList.remove("btn-focus");
      }
    }
  }, [page]);

  const { isLoading, data } = state;

  const numOfPages = Math.ceil(data.length / pageState.launchPerPage);
  const lastLaunchIndex = pageState.launchPerPage * pageState.currentPage;
  const firstLaunchIndex = lastLaunchIndex - pageState.launchPerPage;
  const currentLaunches = data.slice(firstLaunchIndex, lastLaunchIndex);

  const { currentPage } = pageState;

  return isLoading ? (
    <img className="loading" src={Loading} alt="" />
  ) : (
    <Fragment>
      <Page
        headerName={headerName}
        tableData={renderTableData(currentLaunches)}
      ></Page>
      <Pagination
        currentPage={currentPage}
        numOfPages={numOfPages}
        url={url}
      ></Pagination>
    </Fragment>
  );
};

export default Pages;
