import React, { useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { convertSecondToFullTime } from "../hooks";
import { NEXT_LAUNCH_URL } from "../URLs";
import Loading from "../../giphy.gif";

const Home = () => {
  const [state, setState] = useState({
    startTime: 0,
    counterObject: {},
    loading: true,
    launchData: {},
  });

  const onclick = () => {
    let content = document.getElementsByClassName("info-box")[0];
    let container = document.getElementsByClassName("countdown-container")[0];
    let downBtn = document.getElementsByClassName("down-btn")[0];
    let upBtn = document.getElementsByClassName("up-btn")[0];
    if (!content.style.maxHeight) {
      container.style.transform = `translateY(-2vw)`;
      content.style.maxHeight = "130px";
      upBtn.style.display = "inline-block";
      downBtn.style.display = "none";
    } else {
      container.style.transform = `translateY(0.5vw)`;
      content.style.maxHeight = null;
      upBtn.style.display = "none";
      downBtn.style.display = "inline-block";
    }
  };

  useEffect(() => {
    fetch(NEXT_LAUNCH_URL)
      .then((res) => res.json())
      .then((data) => {
        setState({
          ...state,
          startTime: data.launch_date_unix,
          launchData: {
            mission: data.mission_name,
            rocket: data.rocket.rocket_name,
            date: data.launch_date_utc,
            site: data.launch_site.site_name_long,
          },
        });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (state.startTime) {
      let timeOut = setTimeout(() => {
        setState({
          ...state,
          counterObject: {
            ...convertSecondToFullTime(
              state.startTime - Math.floor(Date.now() / 1000)
            ),
          },
          loading: false,
        });
      }, 1000);
      return () => clearTimeout(timeOut);
    }
  });

  const { counterObject, loading, launchData } = state;
  const { d, h, m, s } = counterObject;
  const { mission, rocket, date, site } = launchData;

  return (
    <div className="home-container">
      <SwitchTransition>
        <CSSTransition
          key={!loading}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          {loading ? (
            <img className="loading" src={Loading} alt="" />
          ) : (
            <div className="countdown-container">
              <h4>next launch in</h4>
              <h1 className="text">
                {d}:{h}:{m}:{s}
              </h1>
              <p className="subtext">days : hours : minutes : seconds</p>
              <div className="info-box">
                <div>
                  <p className="subtext2-title">Mission</p>
                  <p className="subtext2">{mission}</p>
                </div>
                <div>
                  <p className="subtext2-title">Rocket</p>
                  <p className="subtext2">{rocket}</p>
                </div>
                <div>
                  <p className="subtext2-title">Launch date</p>
                  <p className="subtext2">{date}</p>
                </div>
                <div>
                  <p className="subtext2-title">Launch site</p>
                  <p className="subtext2">{site}</p>
                </div>
              </div>
              <button className="home-btn down-btn" onClick={onclick}>
                <p>&#x25BD;</p>
              </button>
              <button
                className="home-btn up-btn"
                onClick={onclick}
                style={{ display: "none" }}
              >
                <p>&#x25B3;</p>
              </button>
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Home;
