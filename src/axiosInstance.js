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

// Examples

// Gets the stats for each game for a Player
// https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=237

// Gets season averages by player id. default is current season
// https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237

// all stats of a player
// https://www.balldontlie.io/api/v1/stats?player_ids[]=237
