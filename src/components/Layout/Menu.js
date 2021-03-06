import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menuBtn = [
    { link: "/", title: "home", exact: true },
    { link: "/future", title: "future", exact: false },
    { link: "/past", title: "past", exact: false },
  ];

  return (
    <menu>
      <h1 className="header-text">SpaceX Launch Countdown</h1>
      <nav>
        <ul>
          {menuBtn.map((btn, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={btn.link}
                  exact={btn.exact}
                  activeStyle={{
                    color: "#d9d9d9",
                    backgroundColor: "#292a2e",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  {btn.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </menu>
  );
};

export default Header;
