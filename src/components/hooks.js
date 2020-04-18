import React from "react";

export const convertSecondToFullTime = (seconds) => {
  if (seconds > 0) {
    let d = `0${Math.floor(seconds / (24 * 3600))}`.slice(-2);
    let h = `0${Math.floor((seconds % (24 * 3600)) / 3600)}`.slice(-2);
    let m = `0${Math.floor((seconds % 3600) / 60)}`.slice(-2);
    let s = `0${Math.floor(seconds % 60)}`.slice(-2);

    return { d, h, m, s };
  } else {
    let d = "00";
    let h = "00";
    let m = "00";
    let s = "00";
    return { d, h, m, s };
  }
};

export const renderTableHeader = (headerName) => {
  return (
    <tr>
      {headerName.map((name, index) => {
        return (
          <td key={index} className="table-header">
            {name}
          </td>
        );
      })}
    </tr>
  );
};

export const onHeaderClick = (index) => {
  const contentList = document.getElementsByClassName("launch-content");
  const rowList = document.getElementsByClassName("table-row");
  for (let i = 0; i < contentList.length; i++) {
    if (i === index) {
      rowList[i].classList.toggle("focus");
      if (rowList[i + 1]) {
        rowList[i + 1].classList.toggle("active");
      }
      if (contentList[i].style.maxHeight) {
        contentList[i].style.maxHeight = null;
      } else {
        contentList[i].style.maxHeight = `${contentList[i].scrollHeight}px`;
      }
    }
  }
};

export const onCloseBtnClick = (index) => {
  onHeaderClick(index);
};

export const clearAccordition = () => {
  const contentList = document.getElementsByClassName("launch-content");
  const rowList = document.getElementsByClassName("table-row");
  for (let i = 0; i < contentList.length; i++) {
    contentList[i].style.maxHeight = null;
    rowList[i].classList.remove("focus");
    if (rowList[i + 1]) {
      rowList[i + 1].classList.remove("active");
    }
  }
};

export const formatDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dateObj = new Date(date);
  let YYYY = dateObj.getFullYear();
  let MMM = months[dateObj.getMonth()];
  let DD = `0${dateObj.getDate()}`.slice(-2);
  let hh = `0${dateObj.getHours()}`.slice(-2);
  let mm = `0${dateObj.getMinutes()}`.slice(-2);
  let ss = `0${dateObj.getSeconds()}`.slice(-2);
  return `${YYYY}-${MMM}-${DD} ${hh}:${mm}:${ss}`;
};
