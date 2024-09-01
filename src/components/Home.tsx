import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Auth } from "../contexts/AuthContext";
// import React, { useState, useEffect } from "react";
// import PlanCard from "./PlanCard";
// import api from "./api";
// import Loader from "./common/Loader";
// import Invest from "./Invest";
// import Invested from "./Invested";

export default function Home() {
  const { authVal } = Auth();
  const [selectedIndex, setselectedIndex] = useState(0);

  return (
    <Fragment>
      <h2 className="text-center p-2 m-2">CATL - Finance App</h2>
      <div className="container">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link
              onClick={() => setselectedIndex(0)}
              className={ selectedIndex === 0 ? "nav-link fs-5 active" : "nav-link fs-5" }
              aria-current="page" to="/">Invest</Link>
          </li>
          {authVal.login ? (
            <li className="nav-item">
              <Link
                onClick={() => setselectedIndex(1)}
                className={
                  selectedIndex === 1 ? "nav-link fs-5 active" : "nav-link fs-5"
                } to="/invested">
                Invested <span className="badge text-bg-info">{1}</span>
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <Outlet />
    </Fragment>
  );
}
