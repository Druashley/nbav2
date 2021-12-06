import React from "react";

export default function CreatorInfo() {
  return (
    <div className="md:border md:rounded-xl md:w-2/3 p-4 md:p-12 bg-dark bg-opacity-20 mx-auto mt-12 text-xl">
      <div className="pb-4">
        This website was made by{" "}
        <a
          href="https://twitter.com/Dru_ashley"
          target="_blank"
          rel="noreferrer"
          className="text-cyan hover:text-deepcyan"
        >
          @dru_ashley
        </a>
      </div>
      <div className="pb-4">
        Please reachout on Twitter for any questions or comments
      </div>
      <div className="pb-4">
        Link to the source code is{" "}
        <a
          href="https://github.com/Druashley/nbav2"
          target="_blank"
          rel="noreferrer"
          className="text-cyan hover:text-deepcyan"
        >
          here
        </a>
      </div>
      <div className="pb-4">
        All stats provided by:
        <a
          href="https://www.balldontlie.io/"
          target="_blank"
          rel="noreferrer"
          className="text-cyan hover:text-deepcyan"
        >
          {" "}
          https://www.balldontlie.io/
        </a>
      </div>
    </div>
  );
}
