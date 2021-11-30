import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const state = useSelector((state) => state.playerList);

  const statOptions = useMemo(
    () => [
      { name: "Pick A Stat", value: 0, disabled: "disabled" },
      { name: "Games Played", value: "games_played" },
      { name: "Points", value: "pts" },
      { name: "Field Goal Percentage", value: "fg_pct" },
      { name: "Field Goals Attempts", value: "fga" },
      { name: "Field Goals Made", value: "fgm" },
      { name: "Three Pointer Percentage", value: "fg3_pct" },
      { name: "Three Pointers Attempted", value: "fg3a" },
      { name: "Three Pointers Mades", value: "fg3m" },
      { name: "Free-Throw Percentage", value: "ft_pct" },
      { name: "Free-Throws Attempted", value: "fta" },
      { name: "Free-Throws Made", value: "ftm" },
      { name: "Assists", value: "ast" },
      { name: "Blocks", value: "blk" },
      { name: "Steals", value: "stl" },
      { name: "Personal Fouls", value: "pf" },
      { name: "Turnovers", value: "turnover" },
      { name: "Rebounds", value: "reb" },
      { name: "Offensive Rebounds", value: "oreb" },
      { name: "Defenseive Rebounds", value: "dreb" },
    ],
    []
  );

  const [playerLabels, setPlayerLabels] = useState([]);
  const [optionOne, setOptionOne] = useState("pts");
  const [combinedDataSets, setCombinedDataSets] = useState([]);
  const [barData, setBarData] = useState({});
  const [allStats, setAllStats] = useState([]);

  const [firstDataSet, setFirstDataSet] = useState({
    label: "",
    data: [],
    backgroundColor: "rgb(0, 184, 169)",
    borderColor: "rgb(0, 184, 169)",
    borderWidth: 1,
  });
  const [secondDataSet, setSecondDataSet] = useState({
    label: "",
    data: [],
    backgroundColor: "rgb(248, 243, 212)",
    borderColor: "rgb(248, 243, 212)",
    borderWidth: 1,
  });
  const [thirdDataSet, setThirdDataSet] = useState({
    label: "",
    data: [],
    backgroundColor: "rgb(246, 65, 108)",
    borderColor: "rgb(246, 65, 108)",
    borderWidth: 1,
  });

  useEffect(() => {
    let playerLabelArry = [];
    let playerStats = [];

    state.map((player) => {
      return playerLabelArry.push(
        `${player.season} ${player.first_name} ${player.last_name}`
      );
    });

    state.map((player) => {
      return playerStats.push({
        ...player.stats.data[0],
      });
    });
    setPlayerLabels(playerLabelArry);
    setAllStats(playerStats);
  }, [state]);

  useEffect(() => {
    setCombinedDataSets([firstDataSet, secondDataSet, thirdDataSet]);
  }, [firstDataSet, secondDataSet, thirdDataSet]);

  useEffect(() => {
    setBarData({
      labels: playerLabels,
      datasets: combinedDataSets,
    });
  }, [playerLabels, combinedDataSets]);

  const filteredStatsByOption = (option) => {
    return state.map((player) => {
      return player.stats.data[0][option];
    });
  };

  const filteredStatNameByOption = (option) => {
    let filteredStat = statOptions.filter((stat) => stat.value === option);
    return filteredStat[0].name;
  };

  // useEffect(() => {
  //   setFirstDataSet({
  //     label: filteredStatNameByOption(optionOne),
  //     data: filteredStatsByOption(optionOne),
  //   });
  // }, [optionOne]);

  const handleFirstDataSet = (e) => {
    setOptionOne(e.target.value);
    setFirstDataSet({
      ...firstDataSet,
      label: filteredStatNameByOption(e.target.value),
      data: filteredStatsByOption(e.target.value),
    });
  };

  const handleSecondDataSet = (e) => {
    setSecondDataSet({
      ...secondDataSet,
      label: filteredStatNameByOption(e.target.value),
      data: filteredStatsByOption(e.target.value),
    });
  };

  const handleThirdDataSet = (e) => {
    setThirdDataSet({
      ...thirdDataSet,
      label: filteredStatNameByOption(e.target.value),
      data: filteredStatsByOption(e.target.value),
    });
  };

  const datasetKeyProvider = () => {
    return Math.random();
  };

  return (
    <div>
      {state.length > 0 && (
        <div>
          {" "}
          <div>
            <select
              name="statOne"
              id="statOne"
              className="bg-darkest border rounded mx-2"
              onChange={handleFirstDataSet}
              defaultValue={0}
            >
              {statOptions.map((stat) => {
                return (
                  <option
                    disabled={stat.disabled}
                    value={stat.value}
                    key={stat.value}
                  >
                    {stat.name}
                  </option>
                );
              })}
            </select>
            <select
              name="statTwo"
              id="statTwo"
              className="bg-darkest border rounded mx-2"
              onChange={handleSecondDataSet}
              defaultValue={0}
            >
              {statOptions.map((stat) => {
                return (
                  <option
                    disabled={stat.disabled}
                    value={stat.value}
                    key={stat.value}
                  >
                    {stat.name}
                  </option>
                );
              })}
            </select>
            <select
              name="statThree"
              id="statThree"
              className="bg-darkest border rounded mx-2"
              onChange={handleThirdDataSet}
              defaultValue={0}
            >
              {statOptions.map((stat) => {
                return (
                  <option
                    disabled={stat.disabled}
                    value={stat.value}
                    key={stat.value}
                  >
                    {stat.name}
                  </option>
                );
              })}
            </select>
          </div>
          <Bar
            data={barData}
            height={400}
            width={600}
            datasetKeyProvider={datasetKeyProvider}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: { beginAtZero: true, fontColor: "#fcf1cf" },
                    gridLines: {
                      color: "#fcf1cf",
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: { fontColor: "white" },
                    gridLines: {
                      color: "#fcf1cf",
                    },
                  },
                ],
              },
            }}
          />
        </div>
      )}
    </div>
  );
}
