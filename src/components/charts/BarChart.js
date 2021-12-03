import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const state = useSelector((state) => state.playerList);

  // This array is used to combine Human Readable Stats with the API required stat naming
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
  const [optionTwo, setOptionTwo] = useState(0);
  const [optionThree, setOptionThree] = useState(0);
  const [combinedDataSets, setCombinedDataSets] = useState([]);
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
    // When the Redux state changes. We remap the players to a combine their season and name for the xAxes on the chart.
    let playerLabelArry = [];
    state.map((player) => {
      let firstInitital = player.first_name.slice(0, 1);
      return playerLabelArry.push(
        `${player.season} ${firstInitital} ${player.last_name}`
      );
    });
    setPlayerLabels(playerLabelArry);
  }, [state]);

  useEffect(() => {
    // combines all datasets for the barchart in graph js
    setCombinedDataSets([firstDataSet, secondDataSet, thirdDataSet]);
  }, [firstDataSet, secondDataSet, thirdDataSet]);

  useEffect(() => {
    // final combination of data to put the player labels and the arrays of data together.
    setBarData({
      labels: playerLabels,
      datasets: combinedDataSets,
    });
  }, [playerLabels, combinedDataSets]);

  useEffect(() => {
    // This grabs each stat by 'statName' Example - Gets all [pts] "Points" from playerListArray
    const filteredStatsByOption = (option) => {
      return state.map((player) => {
        if (
          option === "fg_pct" ||
          option === "ft_pct" ||
          option === "fg3_pct"
        ) {
          return Math.floor(player.stats.data[0][option] * 100);
        }

        return player.stats.data[0][option];
      });
    };
    // Sets the Human readable version from the value the API needs
    const filteredStatNameByOption = (option) => {
      let filteredStat = statOptions.filter((stat) => stat.value === option);
      return filteredStat[0].name;
    };
    setFirstDataSet({
      label: filteredStatNameByOption(optionOne),
      data: filteredStatsByOption(optionOne),
      backgroundColor: "rgb(0, 184, 169)",
      borderColor: "rgb(0, 184, 169)",
      borderWidth: 1,
    });
    if (optionTwo === 0) {
      setSecondDataSet({
        label: "",
        data: [],
        backgroundColor: "rgb(248, 243, 212)",
        borderColor: "rgb(248, 243, 212)",
        borderWidth: 1,
      });
    }
    setSecondDataSet({
      label: filteredStatNameByOption(optionTwo),
      data: filteredStatsByOption(optionTwo),

      backgroundColor: "rgb(248, 243, 212)",
      borderColor: "rgb(248, 243, 212)",
      borderWidth: 1,
    });

    if (optionThree === 0) {
      setThirdDataSet({
        label: "",
        data: [],
        backgroundColor: "rgb(246, 65, 108)",
        borderColor: "rgb(246, 65, 108)",
        borderWidth: 1,
      });
    }
    setThirdDataSet({
      label: filteredStatNameByOption(optionThree),
      data: filteredStatsByOption(optionThree),
      backgroundColor: "rgb(246, 65, 108)",
      borderColor: "rgb(246, 65, 108)",
      borderWidth: 1,
    });
  }, [optionOne, optionTwo, optionThree, state, statOptions]);

  const handleOptionChange = (e, optionNumber) => {
    // Sets the state of the option html element via event and the element's number
    if (optionNumber === 1) {
      setOptionOne(e.target.value);
    }
    if (optionNumber === 2) {
      setOptionTwo(e.target.value);
    }
    if (optionNumber === 3) {
      setOptionThree(e.target.value);
    }
  };

  const datasetKeyProvider = () => {
    return Math.random();
  };

  const fontSizeByWindowSize = () => {
    const { innerWidth: width } = window;
    if (width > 1000) {
      return 18;
    } else {
      return 8;
    }
  };
  fontSizeByWindowSize();
  const barChartOptions = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: "#fcf1cf",
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
          ticks: { fontColor: "white", fontSize: fontSizeByWindowSize() },
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
        <div>
          <div className="pt-12 pb-4">
            <div className="text-3xl uppercase text-cream text-center">
              Choose and compare different stats
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around mb-4">
            <select
              name="statOne"
              id="statOne"
              className="bg-darkest border rounded my-2 md:my-0 mx-2 p-1 py-4  md:p-4 cursor-pointer"
              onChange={(e) => {
                handleOptionChange(e, 1);
              }}
              defaultValue={"pts"}
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
              className="bg-darkest border rounded my-2 md:my-0 mx-2 p-1 py-4  md:p-4 cursor-pointer"
              onChange={(e) => {
                handleOptionChange(e, 2);
              }}
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
              className="bg-darkest border rounded my-2 md:my-0 mx-2 p-1 py-4  md:p-4 cursor-pointer"
              onChange={(e) => {
                handleOptionChange(e, 3);
              }}
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

          <div>
            <Bar
              data={barData}
              height={600}
              width={400}
              datasetKeyProvider={datasetKeyProvider}
              options={barChartOptions}
            />
          </div>
          <div className="text-gray-500 text-sm p-2">
            <ul>
              <li className="pb-2">
                * Stats will appear as 0 if the player did not compete in the
                season
              </li>
              <li className="pb-2">
                Click or tap the stat name at the top of the chart to remove it
                from being displayed
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
