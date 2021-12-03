import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Nav() {
  return (
    <nav className="bg-deepcyan  text-darkest p-2 sm:p-4 md:p-12 ">
      <div className="container flex flex-col md:flex-row justify-between items-center mx-auto">
        <Link
          to="/"
          className="text-2xl text-cream"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          NBA Stats
        </Link>
        <SearchBar />
        <ul className="p-2 text-cream">
          <li>
            <Link
              to="/info"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              More Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
