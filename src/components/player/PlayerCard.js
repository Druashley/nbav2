import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { teamInfo } from "../teamInfo/TeamInfo";
import { axiosInstance } from "../../axiosInstance";

export default function PlayerCard({ player }) {
  // const state = useSelector((state) => state);
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
    let emptyStats = {
      data: [
        {
          games_played: 0,
          min: 0,
          fgm: 0,
          fga: 0,
          fg3m: 0,
          fg3a: 0,
          ftm: 0,
          fta: 0,
          oreb: 0,
          dreb: 0,
          reb: 0,
          ast: 0,
          stl: 0,
          blk: 0,
          turnover: 0,
          pf: 0,
          pts: 0,
          fg_pct: 0,
          fg3_pct: 0,
          ft_pct: 0,
        },
      ],
    };
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
          // if statement checks to see if the api has stats. If not we fill in with 0s.
          // this makes data manipulation easier for later in the project.
          if (res.data.data.length === 0) {
            player.stats = emptyStats;
          } else {
            player.stats = res.data;
          }

          player.season = e.target.value;
          updatePlayerStatsBySeason(player);
        });
    }
  };
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
