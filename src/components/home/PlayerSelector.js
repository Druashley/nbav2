import React from "react";
import { axiosInstance } from "../../axiosInstance";
export default function PlayerSelector({
  searchedPlayerList,
  setSearchedPlayerList,
  search,
  setSearch,
}) {
  const handlePageChange = (page) => {
    window.scrollTo(0, 0);
    axiosInstance
      .get(`players?search=${search}&page=${page}&per_page=10`)
      .then((res) => {
        console.log(res.data);
        setSearchedPlayerList(res.data);
      });
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-center overflow-y-auto  md:h-auto ">
        {searchedPlayerList.data &&
          searchedPlayerList.data.map((player) => {
            return (
              <div
                key={player.id}
                className="border rounded p-2 m-2 cursor-pointer "
              >
                <div>
                  {player.first_name} {player.last_name}
                </div>
              </div>
            );
          })}
      </div>
      {searchedPlayerList.meta && (
        <div className="flex justify-center items-center pt-4">
          <div
            className="border p-2 rounded cursor-pointer"
            onClick={() => {
              handlePageChange(1);
            }}
          >
            Page: 1
          </div>
          {searchedPlayerList.meta.next_page && (
            <div
              className="border p-2 rounded cursor-pointer"
              onClick={() => {
                handlePageChange(searchedPlayerList.meta.next_page);
              }}
            >
              Next Page: {searchedPlayerList.meta.next_page}
            </div>
          )}
          {!searchedPlayerList.meta.next_page && (
            <div
              className="border p-2 rounded cursor-pointer"
              onClick={() => {
                handlePageChange(searchedPlayerList.meta.next_page);
              }}
            >
              Current Page: {searchedPlayerList.meta.current_page}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
