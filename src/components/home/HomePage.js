import React from "react";
import PlayerSelector from "./PlayerSelector";
import blob from "../../images/nba.svg";

export default function HomePage({
  searchedPlayerList,
  setSearchedPlayerList,
  search,
  setSearch,
}) {
  return (
    <section
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${blob})` }}
    >
      <div className="container mx-auto pt-12 text-cream">
        <PlayerSelector
          searchedPlayerList={searchedPlayerList}
          setSearchedPlayerList={setSearchedPlayerList}
          search={search}
          setSearch={setSearch}
        />
        <div>player List</div>
        <div>Stats showcase</div>
      </div>
    </section>
  );
}
