import React from "react";

import infoBackgroundTwo from "../../images/info-background-2.svg";
import CreatorInfo from "./CreatorInfo";

export default function InfoPage() {
  return (
    <div
      className="min-h-screen bg-cover text-cream"
      style={{ backgroundImage: `url(${infoBackgroundTwo})` }}
    >
      <div className="flex flex-col container mx-auto">
        {/* <div>
          <div>How to use video</div>
        </div> */}
        <CreatorInfo />
      </div>
    </div>
  );
}
