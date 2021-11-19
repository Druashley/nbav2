import React from "react";
import SearchBar from "./SearchBar";

export default function Nav({ setSearchedPlayerList, search, setSearch }) {
  return (
    <nav className="bg-deepcyan  text-darkest p-2 sm:p-4 md:p-12 ">
      <div className="container flex flex-col md:flex-row justify-between items-center mx-auto">
        <div className="text-2xl text-cream">NBA Stats</div>
        <SearchBar
          setSearchedPlayerList={setSearchedPlayerList}
          search={search}
          setSearch={setSearch}
        />
        <ul className="p-2 text-cream">
          <li>More Info</li>
        </ul>
      </div>
    </nav>
  );
}
