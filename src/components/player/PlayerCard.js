import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { teamInfo } from "../teamInfo/TeamInfo";
import { axiosInstance } from "../../axiosInstance";

export default function PlayerCard({ player }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { removePlayerFromList, updatePlayerStatsBySeason } =
    bindActionCreators(actionCreators, dispatch);

  let date = new Date();
  let year = date.getFullYear();
  let NBASeasons = [];
  for (year; year > 1978; year--) {
    NBASeasons.push(year);
  }

  const getPlayerSeasonalAverages = async (e, player) => {
    if (!e) {
      await axiosInstance
        .get(`/season_averages?player_ids[]=${player.id}`)
        .then((res) => {
          player.stats = res.data;
          player.season = 2021;
          updatePlayerStatsBySeason(player);
        });
    }
    if (e) {
      await axiosInstance
        .get(
          `/season_averages?season=${e.target.value}&player_ids[]=${player.id}`
        )
        .then((res) => {
          // console.log(
          //   `/season_averages?season=${e.target.value}&player_ids[]=${player.id}`
          // );
          player.stats = res.data;
          player.season = e.target.value;
          updatePlayerStatsBySeason(player);

          console.log(player);
        });
    }
  };
  // console.log(player);
  // const handleSeasonChange = (e) => {
  //   getPlayerSeasonalAverages(player, e.target.value);
  // };

  return (
    <div className="border flex w-96 rounded m-2">
      <div
        className="w-1/2 flex items-center justify-center text-2xl font-bold hover:opacity-20 cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${
            teamInfo(player.team).colors.colorOne
          } 50%, ${teamInfo(player.team).colors.colorTwo} 50%)`,
        }}
        onClick={() => {
          removePlayerFromList(player.uuid);
        }}
      >
        <div className="bg-darkest bg-opacity-50 p-1 rounded">
          {player.team}
        </div>
      </div>
      <div className="w-1/2 flex flex-col p-4">
        <div className="text-xl">
          {player.first_name} {player.last_name}
        </div>
        <div className=" flex">
          <div>Season:</div>
          <select
            name="year"
            id="year"
            className="bg-darkest border rounded mx-2"
            onChange={(e) => {
              getPlayerSeasonalAverages(e, player);
            }}
          >
            {NBASeasons.length > 0 &&
              NBASeasons.map((NBAseason) => {
                return (
                  <option key={NBAseason} value={NBAseason}>
                    {NBAseason}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </div>
  );
}
