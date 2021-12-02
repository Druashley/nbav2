import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Line } from "react-chartjs-2";

export default function LineChart() {
  const state = useSelector((state) => state.playerList);

  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [shootingChartData, setShootingChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    let allPlayerDataSets = [];
    let shootingChartDataSets = [];
    state.forEach((player) => {
      const randomColor = () => {
        let o = Math.round;
        let r = Math.random;
        let s = 255;
        return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
      };
      let playerDataset = {};
      let playerStatArray = [];

      let shootingDataSet = {};
      let shootingStatArray = [];

      shootingStatArray.push(player.stats.data[0].pts);
      shootingStatArray.push(Math.floor(player.stats.data[0].fg_pct * 100));
      shootingStatArray.push(Math.floor(player.stats.data[0].fg3_pct * 100));
      shootingStatArray.push(Math.floor(player.stats.data[0].ft_pct * 100));

      playerStatArray.push(player.stats.data[0].ast);
      playerStatArray.push(player.stats.data[0].blk);
      playerStatArray.push(player.stats.data[0].stl);
      playerStatArray.push(player.stats.data[0].turnover);
      playerStatArray.push(player.stats.data[0].reb);

      playerDataset.label = `${player.season} ${player.first_name} ${player.last_name}`;
      playerDataset.data = playerStatArray;

      playerDataset.borderColor = randomColor();

      shootingDataSet.label = `${player.season} ${player.first_name} ${player.last_name}`;
      shootingDataSet.data = shootingStatArray;
      shootingDataSet.borderColor = randomColor();

      allPlayerDataSets.push(playerDataset);

      shootingChartDataSets.push(shootingDataSet);
    });

    setShootingChartData({
      labels: ["PTS", "FG%", "3P%", "FT%"],
      datasets: shootingChartDataSets,
    });

    setLineChartData({
      labels: ["AST", "BLK", "STL", "TO", "REB"],
      datasets: allPlayerDataSets,
    });
  }, [state]);

  const lineChartOptions = {
    maintainAspectRatio: false,

    legend: {
      labels: {
        fontColor: "white",
      },
    },
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
          ticks: { fontColor: "white", fontSize: 18 },
          gridLines: {
            color: "#fcf1cf",
          },
        },
      ],
    },
  };

  return (
    <div>
      {state.length > 0 && (
        <div className=" flex-col">
          <h1>Line Chart</h1>
          <div>
            <Line
              height={600}
              width={400}
              data={shootingChartData}
              options={lineChartOptions}
            />
          </div>
          <div>
            <Line
              height={600}
              width={400}
              data={lineChartData}
              options={lineChartOptions}
            />
          </div>
        </div>
      )}
    </div>
  );
}
