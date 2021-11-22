import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayerCard from "./PlayerCard";

export default function PlayerList() {
  const playerList = useSelector((state) => state.playerList);
  return (
    <div>
      <div className="flex flex-wrap justify-center items-stretch">
        {playerList.length > 0 &&
          playerList.map((player) => {
            return (
              <PlayerCard
                firstName={player.first_name}
                lastName={player.last_name}
                team={player.team}
                id={player.id}
                uuid={player.uuid}
                key={player.uuid}
              />
            );
          })}
      </div>
    </div>
  );
}
