import axios from "axios";

const baseURL = "https://www.balldontlie.io/api/v1/";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export const getPlayerSeasonalAverages = async (id, season) => {
  if (!season) {
    await axiosInstance
      .get(`/season_averages?player_ids[]=${id}`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  }
  if (season) {
    await axiosInstance
      .get(`/season_averages?season=[]${season}&player_ids[]=${id}`)
      .then((res) => {
        return res.data;
      });
  }
};

// Examples

// Gets the stats for each game for a Player
// https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=237

// Gets season averages by player id. default is current season
// https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237

// all stats of a player
// https://www.balldontlie.io/api/v1/stats?player_ids[]=237
