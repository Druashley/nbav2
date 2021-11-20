import React, { useState } from "react";
import { axiosInstance } from "../../axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

export default function SearchBar() {
  // Sets state to all possible options.
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // returns all methods, so we destructure instead.
  // const AC = bindActionCreators(actionCreators, dispatch);

  const { changeSearch, deleteSearch, setSearchResults } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // allows you to set state to just the data you need
  // const state = useSelector((state) => state.search);

  const getResults = async () => {
    await axiosInstance
      .get(`players?search=${state.search}&per_page=10`)
      .then((res) => {
        setSearchResults(res.data);
      });
  };

  return (
    <div className="flex justify-start ">
      <input
        type="text"
        placeholder="Enter player name"
        className="p-4 rounded"
        value={state.search}
        onChange={(e) => {
          changeSearch(e.target.value);
        }}
      />
      <button
        className="bg-dark text-cyan p-2 sm:p-4 rounded uppercase"
        onClick={() => {
          getResults();
        }}
      >
        Search
      </button>
    </div>
  );
}
