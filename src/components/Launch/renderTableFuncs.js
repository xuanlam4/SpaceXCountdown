import React, { Fragment } from "react";
import { onHeaderClick, onCloseBtnClick, formatDate } from "../utils";

export const futureHeaderName = [
  "Date \n (Indochina Time)",
  "Mission name",
  "Rocket",
  "Launch site",
];

export const pastHeaderName = [
  "Date",
  "Patch",
  "Mission name",
  "Rocket",
  "Launch site",
];

export const renderFutureTableData = (data) => {
  if (data) {
    return data.map((launch, index) => {
      return (
        <Fragment key={index}>
          <tr className="table-row" onClick={() => onHeaderClick(index)}>
            <td>{formatDate(launch.launch_date_utc)}</td>
            <td>{launch.mission_name}</td>
            <td className="rocket-td">{launch.rocket.rocket_name}</td>
            <td>{launch.launch_site.site_name_long}</td>
          </tr>
          <tr>
            <td colSpan="100%" className="content-td">
              <div className="launch-content">
                <h3>Detail:</h3>
                <p>{launch.details}</p>
                <br />
                <h3>First stage:</h3>
                <p>
                  Core(s):{" "}
                  {launch.rocket.first_stage.cores.map((core, i) => {
                    return `${core.core_serial}`;
                  })}
                </p>
                <br />
                <h3>Second stage:</h3>
                <h4>Payload(s):</h4>
                <ul>
                  {launch.rocket.second_stage.payloads.map((payload, i) => {
                    return (
                      <ul key={i}>
                        <h5>{payload.payload_id}</h5>
                        <li>
                          Customer:{" "}
                          {payload.customers.map((custom) => `${custom}`)}
                        </li>
                        <li>Nationality: {payload.nationality}</li>
                        <li>Manufacturer: {payload.manufacturer}</li>
                        <li>Type: {payload.payload_type}</li>
                        <li>Orbit: {payload.orbit}</li>
                        <li>Mass: {payload.payload_mass_kg}kg</li>
                      </ul>
                    );
                  })}
                </ul>
                <button
                  className="close-btn"
                  onClick={() => onCloseBtnClick(index)}
                >
                  Close
                </button>
              </div>
            </td>
          </tr>
        </Fragment>
      );
    });
  }
};

export const renderPastTableData = (data) => {
  if (data) {
    return data.map((launch, index) => {
      return (
        <Fragment key={index}>
          <tr className="table-row" onClick={() => onHeaderClick(index)}>
            <td>{formatDate(launch.launch_date_utc)}</td>
            <td>
              <img
                className="mission-patch"
                src={launch.links.mission_patch_small}
                alt="mission patch"
              />
            </td>
            <td>{launch.mission_name}</td>
            <td className="rocket-td">{launch.rocket.rocket_name}</td>
            <td>{launch.launch_site.site_name_long}</td>
          </tr>
          <tr>
            <td colSpan="100%" className="content-td">
              <div className="launch-content">
                <h3>Detail:</h3>
                <p>{launch.details}</p>
                <br />
                <h3>First stage:</h3>
                <h4> Core(s):</h4>
                {launch.rocket.first_stage.cores.map((core, i) => {
                  return (
                    <ul key={i}>
                      <li>Serial: {core.core_serial}</li>
                      <li>Flight: {core.flight}</li>
                      <li>Block: {core.block}</li>
                    </ul>
                  );
                })}
                <br />
                <h3>Second stage:</h3>
                <h4>Payload(s):</h4>
                {launch.rocket.second_stage.payloads.map((payload, i) => {
                  return (
                    <ul key={i}>
                      <h5>{payload.payload_id}</h5>
                      <li>
                        Customer:{" "}
                        {payload.customers.map((custom) => `${custom}`)}
                      </li>
                      <li>Nationality: {payload.nationality}</li>
                      <li>Manufacturer: {payload.manufacturer}</li>
                      <li>Type: {payload.payload_type}</li>
                      <li>Orbit: {payload.orbit}</li>
                      <li>Mass: {payload.payload_mass_kg}kg</li>
                    </ul>
                  );
                })}
                <br />
                <h3>Success: {launch.launch_success ? "Yes" : "No"}</h3>
                {!launch.launch_success && (
                  <p>Reason: {launch.launch_failure_details.reason}</p>
                )}
                <button
                  className="close-btn"
                  onClick={() => onCloseBtnClick(index)}
                >
                  Close
                </button>
              </div>
            </td>
          </tr>
        </Fragment>
      );
    });
  }
};
