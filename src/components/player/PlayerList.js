import React from "react";
import { useSelector } from "react-redux";
import PlayerCard from "./PlayerCard";

export default function PlayerList() {
  const playerList = useSelector((state) => state.playerList);
  return (
    <div>
      <div className="flex flex-wrap justify-center items-stretch">
        {playerList.length > 0 &&
          playerList.map((player) => {
            return <PlayerCard player={player} key={player.uuid} />;
          })}
      </div>
    </div>
  );
}
