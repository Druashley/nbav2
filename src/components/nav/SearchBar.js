import React, { useState } from "react";
import { axiosInstance } from "../../axiosInstance";

export default function SearchBar({
  setSearchedPlayerList,
  search,
  setSearch,
}) {
  const handleSearch = () => {
    axiosInstance.get(`players?search=${search}&per_page=10`).then((res) => {
      console.log(res.data);
      setSearchedPlayerList(res.data);
    });
  };
  return (
    <div className="flex justify-start ">
      <input
        type="text"
        placeholder="Enter player name"
        className="p-4 rounded"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="bg-dark text-cyan p-2 sm:p-4 rounded uppercase"
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </button>
    </div>
  );
}
