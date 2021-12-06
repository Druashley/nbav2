import React from "react";
import { useSelector } from "react-redux";
import PlayerSelector from "../player/PlayerSelector";
import PlayerList from "../player/PlayerList";
import PlayerTable from "../player/PlayerTable";
import blob from "../../images/nba.svg";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import CreatorInfo from "../info/CreatorInfo";
import HowToVideo from "../info/HowToVideo";

export default function HomePage() {
  const state = useSelector((state) => state);
  return (
    <section
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${blob})` }}
    >
      {state.searchResult.length === 0 && state.playerList.length === 0 && (
        <div className="container mx-auto pt-12 text-cream text-2xl flex flex-col items-center justify-center">
          <div className="text-center">
            Search and add NBA players to begin comparing season averages
          </div>

          <HowToVideo />

          <CreatorInfo />
        </div>
      )}
      <div className="container mx-auto pt-12 text-cream">
        <PlayerSelector />
        <PlayerList />
        <PlayerTable />
        <BarChart />
        <LineChart />
      </div>
    </section>
  );
}
