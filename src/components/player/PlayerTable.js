import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

export default function PlayerTable() {
  const state = useSelector((state) => state.playerList);
  const playerList = [...state];
  const dispatch = useDispatch();
  const { sortPlayerListByStat } = bindActionCreators(actionCreators, dispatch);

  const [activeStat, setActiveStat] = useState("");
  const [columnDirection, setColumnDirection] = useState(true);

  const handleStatSort = (stat, ascending) => {
    setActiveStat(stat);
    let metric = {
      stat,
      ascending,
    };
    sortPlayerListByStat(metric);
    setColumnDirection(!columnDirection);
  };

  return (
    <>
      {playerList.length > 0 && (
        <div className="overflow-auto text-xs md:text-base text-center">
          <div className="py-2">
            <div className="text-3xl uppercase text-cream text-center">
              Season Averages
            </div>
          </div>
          <table className=" border-collapse w-full table-fixed break-word">
            <thead>
              <tr className="h-12">
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell md:w-24 w-24">
                  Name
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-14 md:text-xs lg:text-base">
                  Season
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-12">
                  Min
                </th>
                <th
                  className={
                    activeStat === "games_played"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() =>
                    handleStatSort("games_played", columnDirection)
                  }
                >
                  GP
                </th>
                <th
                  className={
                    activeStat === "pts"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("pts", columnDirection)}
                >
                  PTS
                </th>
                <th
                  className={
                    activeStat === "fg_pct"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("fg_pct", columnDirection)}
                >
                  FG%
                </th>
                <th
                  className={
                    activeStat === "fga"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("fga", columnDirection)}
                >
                  FGA
                </th>
                <th
                  className={
                    activeStat === "fgm"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("fgm", columnDirection)}
                >
                  FGM
                </th>
                <th
                  className={
                    activeStat === "fg3_pct"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("fg3_pct", columnDirection)}
                >
                  3P%
                </th>
                <th
                  className={
                    activeStat === "fg3a"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("fg3a", columnDirection)}
                >
                  3PA
                </th>
                <th
                  className={
                    activeStat === "fg3m"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("fg3m", columnDirection)}
                >
                  3PM
                </th>
                <th
                  className={
                    activeStat === "ft_pct"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("ft_pct", columnDirection)}
                >
                  FT%
                </th>
                <th
                  className={
                    activeStat === "fta"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("fta", columnDirection)}
                >
                  {" "}
                  FTA
                </th>
                <th
                  className={
                    activeStat === "ftm"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("ftm", columnDirection)}
                >
                  FTM
                </th>
                <th
                  className={
                    activeStat === "ast"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("ast", columnDirection)}
                >
                  AST
                </th>
                <th
                  className={
                    activeStat === "blk"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("blk", columnDirection)}
                >
                  BLK
                </th>
                <th
                  className={
                    activeStat === "stl"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("stl", columnDirection)}
                >
                  STL
                </th>
                <th
                  className={
                    activeStat === "pf"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("pf", columnDirection)}
                >
                  PF
                </th>
                <th
                  className={
                    activeStat === "turnover"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("turnover", columnDirection)}
                >
                  TO
                </th>
                <th
                  className={
                    activeStat === "reb"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("reb", columnDirection)}
                >
                  REB
                </th>
                <th
                  className={
                    activeStat === "oreb"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("oreb", columnDirection)}
                >
                  OREB
                </th>
                <th
                  className={
                    activeStat === "dreb"
                      ? "uppercase bg-deepcyan text-cream border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-deepcyan hover:text-cream"
                  }
                  onClick={() => handleStatSort("dreb", columnDirection)}
                >
                  DREB
                </th>
              </tr>
            </thead>
            <tbody>
              {playerList.map((player) => {
                return (
                  <tr
                    className="border bg-gray-900 even:bg-dark"
                    key={player.uuid}
                  >
                    <td className="border min-h-12 min-w-4 break-all ">
                      {player.first_name} {player.last_name}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {player.season}
                    </td>

                    <td className="border min-h-12 min-w-4 break-all ">
                      {player.stats.data.length > 0
                        ? player.stats.data[0].min
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].games_played
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].pts
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? `${(player.stats.data[0].fg_pct * 100).toFixed(1)} % `
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].fga
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].fgm
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? `${(player.stats.data[0].fg3_pct * 100).toFixed(1)} %`
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].fg3a
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].fg3m
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? `${(player.stats.data[0].ft_pct * 100).toFixed(1)} %`
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].fta
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].ftm
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].ast
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].blk
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].stl
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].pf
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].turnover
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].reb
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].oreb
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].dreb
                        : "DNP"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-start place-items-start text-left w-full">
            <div className="text-gray-500 text-sm p-2">
              <ul>
                <li className="pb-2">
                  * Stats will appear as 0 if the player did not compete in the
                  season
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
