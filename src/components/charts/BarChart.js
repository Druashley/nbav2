import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const state = useSelector((state) => state.playerList);

  const statOptions = [
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
  ];
  const [playerLabels, setPlayerLabels] = useState([]);
  const [barData, setBarData] = useState({});

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
    state.map((player) => {
      return playerLabelArry.push(
        `${player.season} ${player.first_name} ${player.last_name}`
      );
    });
    setPlayerLabels(playerLabelArry);
  }, [state]);

  useEffect(() => {
    let newTableData = {
      labels: playerLabels,
      datasets: [firstDataSet, secondDataSet, thirdDataSet],
    };
    setBarData(newTableData);
  }, [playerLabels, firstDataSet, secondDataSet, thirdDataSet]);

  const handleFirstDataSet = (e) => {
    let filteredStat = statOptions.filter(
      (stat) => stat.value === e.target.value
    );
    let labelName = filteredStat[0].name;
    console.log(e.target.value);
    let filteredData = state.map((player) => {
      return player.stats.data[0][e.target.value];
    });
    setFirstDataSet({
      label: labelName,
      data: filteredData,
      backgroundColor: "rgb(0, 184, 169)",
      borderColor: "rgb(0, 184, 169)",
      borderWidth: 1,
    });
  };

  const handleSecondDataSet = (e) => {
    let filteredStat = statOptions.filter(
      (stat) => stat.value === e.target.value
    );
    let labelName = filteredStat[0].name;
    let filteredData = state.map((player) => {
      return player.stats.data[0][e.target.value];
    });
    setSecondDataSet({
      label: labelName,
      data: filteredData,
      backgroundColor: "rgb(248, 243, 212)",
      borderColor: "rgb(248, 243, 212)",
      borderWidth: 1,
    });
  };

  const handleThirdDataSet = (e) => {
    let filteredStat = statOptions.filter(
      (stat) => stat.value === e.target.value
    );
    let labelName = filteredStat[0].name;
    let filteredData = state.map((player) => {
      return player.stats.data[0][e.target.value];
    });
    setThirdDataSet({
      label: labelName,
      data: filteredData,
      backgroundColor: "rgb(246, 65, 108)",
      borderColor: "rgb(246, 65, 108)",
      borderWidth: 1,
    });
  };

  //   const barData = {
  //     labels: playerLabels,
  //     datasets: [
  //       {
  //         label: "# of Votes",
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(255, 206, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //           "rgba(153, 102, 255, 0.2)",
  //           "rgba(255, 159, 64, 0.2)",
  //         ],
  //         borderColor: [
  //           "rgba(255, 99, 132, 1)",
  //           "rgba(54, 162, 235, 1)",
  //           "rgba(255, 206, 86, 1)",
  //           "rgba(75, 192, 192, 1)",
  //           "rgba(153, 102, 255, 1)",
  //           "rgba(255, 159, 64, 1)",
  //         ],
  //         borderWidth: 1,
  //       },
  //       {
  //         label: "Quantity",
  //         data: [10, 14, 67, 57, 50, 32],
  //         backgroundColor: "orange",
  //         borderColor: "red",
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

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
            >
              {statOptions.map((stat) => {
                return (
                  <option value={stat.value} key={stat.value}>
                    {stat.name}
                  </option>
                );
              })}
            </select>
            <select
              name="statOne"
              id="statOne"
              className="bg-darkest border rounded mx-2"
              onChange={handleSecondDataSet}
            >
              {statOptions.map((stat) => {
                return (
                  <option value={stat.value} key={stat.value}>
                    {stat.name}
                  </option>
                );
              })}
            </select>
            <select
              name="statOne"
              id="statOne"
              className="bg-darkest border rounded mx-2"
              onChange={handleThirdDataSet}
            >
              {statOptions.map((stat) => {
                return (
                  <option value={stat.value} key={stat.value}>
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
            options={{ scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }}
          />
        </div>
      )}
    </div>
  );
}
