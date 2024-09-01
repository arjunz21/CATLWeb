import { Link } from "react-router-dom";
import { Auth } from "../../contexts/AuthContext";
import { useState } from "react";

export default function Header() {
  const {authVal, setAuthClear} = Auth();
  const [selectedIndex, setselectedIndex] = useState(0);
  function logout() { setAuthClear(); }

  return (
    <nav className="container-fluid sticky-top rounded-4 navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="fs-3 navbar-brand">CATL</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item btn-primary active">
              <Link
                onClick={() => setselectedIndex(0)}
                to="/"
                className={
                  selectedIndex === 0 ? "fs-5 nav-link active" : "fs-5 nav-link"}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => setselectedIndex(1)} to="/about"
                className={selectedIndex === 1 ? "fs-5 nav-link active" : "fs-5 nav-link"}>
                AboutUs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => setselectedIndex(2)}
                to="/support"
                className={
                  selectedIndex === 2 ? "fs-5 nav-link active" : "fs-5 nav-link"}>
                Support
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"/>
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav">
            {!authVal.login ? (
              <>
                <li className="nav-item">
                  <Link to="/register" className="fs-5 nav-link active">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="fs-5 nav-link active">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="fs-5 nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </a>
                <ul className="dropdown-menu dropdown-menu-end mt-3">
                  <li>
                    <Link to="/inviteincome" className="dropdown-item">
                      Invite Income
                    </Link>
                  </li>
                  <li>
                    <Link to="/myinfo" className="dropdown-item">
                      My Personal Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="dropdown-item">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/" onClick={logout} className="dropdown-item">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
