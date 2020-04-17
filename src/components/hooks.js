import React from "react";

export const formatToTwoDigits = (number) => {
  return number < 10 ? `0${number}` : number;
};

export const convertSecondToFullTime = (seconds) => {
  if (seconds > 0) {
    let d = formatToTwoDigits(Math.floor(seconds / (24 * 3600)));
    let h = formatToTwoDigits(Math.floor((seconds % (24 * 3600)) / 3600));
    let m = formatToTwoDigits(Math.floor((seconds % 3600) / 60));
    let s = formatToTwoDigits(Math.floor(seconds % 60));

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
      if (contentList[i].style.maxHeight) {
        contentList[i].style.maxHeight = null;
        rowList[i].classList.remove("focus");
        if (rowList[i + 1]) {
          rowList[i + 1].classList.remove("active");
        }
      } else {
        contentList[i].style.maxHeight = `${contentList[i].scrollHeight}px`;
        rowList[i].classList.add("focus");
        if (rowList[i + 1]) {
          rowList[i + 1].classList.add("active");
        }
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
  let DD = dateObj.getDate();
  let hh = formatToTwoDigits(dateObj.getHours());
  let mm = formatToTwoDigits(dateObj.getMinutes());
  let ss = formatToTwoDigits(dateObj.getSeconds());
  return `${YYYY}-${MMM}-${DD} ${hh}:${mm}:${ss}`;
};
