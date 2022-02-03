import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import user from "../../common/images/user.png";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo">Movie</div>
      </Link>
      <div className="search">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search Movies or Shows"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit" disabled={term.length === 0}>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
        <div class="menu-item">
          <i
            className={!open ? "fas fa-caret-down" : "fas fa-caret-up"}
            style={{ color: "#fff" }}
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        {open && (
          <ul className="dropdown-menu">
            <li onClick={() => setOpen(!open)}>Logout</li>
            <li onClick={() => setOpen(!open)}>Link 1</li>
            <li onClick={() => setOpen(!open)}>Link 1</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
