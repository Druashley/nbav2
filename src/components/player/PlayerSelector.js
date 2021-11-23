import React from "react";
import { v4 as uuidv4 } from "uuid";
import { axiosInstance } from "../../axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { teamInfo } from "../teamInfo/TeamInfo";

export default function PlayerSelector() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    deleteSearch,
    setSearchResults,
    clearSearchResults,
    addToPlayerList,
  } = bindActionCreators(actionCreators, dispatch);

  const handlePageChange = async (page) => {
    // Axios request that gets data based on the page of results.
    window.scrollTo(0, 0);
    await axiosInstance
      .get(`players?search=${state.search}&page=${page}&per_page=10`)
      .then((res) => {
        setSearchResults(res.data);
      });
  };

  const handleClear = () => {
    //Clears the search results and then clears the search bar.
    clearSearchResults();
    deleteSearch();
  };

  const getPlayerSeasonalAverages = async (player, season) => {
    if (!season) {
      await axiosInstance
        .get(`/season_averages?player_ids[]=${player.id}`)
        .then((res) => {
          player.uuid = uuidv4();
          player.stats = res.data;
          player.season = 2021;
          addToPlayerList(player);
        });
    }
    if (season) {
      await axiosInstance
        .get(`/season_averages?season=[]${season}&player_ids[]=${player.id}`)
        .then((res) => {
          return res.data;
        });
    }
  };

  return (
    <div className="flex flex-col">
      {/* <button
        onClick={() => {
          console.log(state);
        }}
      >
        See State
      </button> */}
      <div className="flex flex-wrap justify-center overflow-y-auto  md:h-auto  ">
        {state.searchResult &&
          state.searchResult.data &&
          state.searchResult.data.map((player) => {
            return (
              <div
                key={player.id}
                className="border rounded p-2 m-2 cursor-pointer hover:border-darkest text-lg "
                style={{
                  background: `linear-gradient(135deg, ${
                    teamInfo(player.team.abbreviation).colors.colorOne
                  } 50%, ${
                    teamInfo(player.team.abbreviation).colors.colorTwo
                  } 50%)`,
                }}
                onClick={() => {
                  getPlayerSeasonalAverages(player);
                }}
              >
                <div className="bg-darkest bg-opacity-50 rounded">
                  {player.first_name} {player.last_name}
                </div>
              </div>
            );
          })}
      </div>

      {state.searchResult &&
        state.searchResult.meta &&
        state.searchResult.data.length > 0 &&
        state.searchResult.meta.total_pages !== 1 && (
          <div className="flex justify-center items-center pt-4">
            <div
              className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
              onClick={() => {
                handlePageChange(1);
              }}
            >
              1
            </div>
            {state.searchResult.meta.next_page && (
              <div className="flex">
                {state.searchResult.meta.current_page !== 1 &&
                  state.searchResult.meta.current_page !== 2 && (
                    <div
                      className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
                      onClick={() => {
                        handlePageChange(state.searchResult.meta.next_page - 2);
                      }}
                    >
                      {state.searchResult.meta.next_page - 2}
                    </div>
                  )}

                {state.searchResult.meta.current_page !== 1 && (
                  <div className="border p-2 rounded font-extrabold underline ">
                    {state.searchResult.meta.current_page}
                  </div>
                )}

                <div
                  className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
                  onClick={() => {
                    handlePageChange(state.searchResult.meta.next_page);
                  }}
                >
                  {state.searchResult.meta.next_page}
                </div>
              </div>
            )}
            {!state.searchResult.meta.next_page && (
              <div className="flex">
                <div
                  className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
                  onClick={() => {
                    handlePageChange(state.searchResult.meta.current_page - 1);
                  }}
                >
                  {state.searchResult.meta.current_page - 1}
                </div>
                <div className="border p-2 rounded cursor-pointer underline font-extrabold ">
                  {state.searchResult.meta.current_page}
                </div>
              </div>
            )}
          </div>
        )}
      {state.searchResult.data && state.searchResult.data.length > 0 && (
        <div className="flex justify-center py-4 px-12 md:px-24">
          <div
            className="uppercase border p-4 rounded bg-darkest cursor-pointer hover:border-deepcyan hover:bg-cream hover:text-dark"
            onClick={() => {
              handleClear();
            }}
          >
            Clear
          </div>
        </div>
      )}
    </div>
  );
}
