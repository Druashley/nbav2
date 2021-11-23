import React from "react";
import { useSelector } from "react-redux";

export default function PlayerTable() {
  const state = useSelector((state) => state.playerList);

  const playerList = [...state];
  return (
    <>
      {playerList.length > 0 && (
        <div className="overflow-auto text-xs md:text-base">
          <table className="border-collapse w-full table-fixed break-word mt-12 overflow-auto">
            <thead>
              <tr className="h-12">
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell md:w-24 w-24">
                  Name
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-12">
                  Season
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-12">
                  Min
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  GP
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  PTS
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  FG%
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  FGA
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  FGM
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  3P%
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  3PA
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  3PM
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  FT%
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  FTA
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  FTM
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  AST
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  BLK
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  STL
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  PF
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-8">
                  TO
                </th>
              </tr>
            </thead>
            <tbody>
              {playerList.map((player) => {
                return (
                  <tr className="border" key={player.uuid}>
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
