import React from "react";
import PlayerSelector from "../player/PlayerSelector";
import PlayerList from "../player/PlayerList";
import PlayerTable from "../player/PlayerTable";
import blob from "../../images/nba.svg";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";

export default function HomePage() {
  return (
    <section
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${blob})` }}
    >
      <div className="container mx-auto pt-12 text-cream">
        <PlayerSelector />
        <PlayerList />
        <PlayerTable />
        <BarChart />
        <LineChart />

        {/* <div>Stats showcase</div> */}
      </div>
    </section>
  );
}
