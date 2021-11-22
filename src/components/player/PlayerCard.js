import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { teamInfo } from "../teamInfo/TeamInfo";

export default function PlayerCard({ firstName, lastName, id, team, uuid }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { removePlayerFromList } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="border flex w-96 rounded m-2">
      <div
        className="w-1/2 flex items-center justify-center text-2xl font-bold hover:opacity-20 cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${
            teamInfo(team).colors.colorOne
          } 50%, ${teamInfo(team).colors.colorTwo} 50%)`,
        }}
        onClick={() => {
          removePlayerFromList(uuid);
        }}
      >
        <div className="bg-darkest bg-opacity-50 p-1 rounded">{team}</div>
      </div>
      <div className="w-1/2 flex flex-col p-4">
        <div className="text-xl">
          {firstName} {lastName}
        </div>

        <div>year</div>
      </div>
    </div>
  );
}
