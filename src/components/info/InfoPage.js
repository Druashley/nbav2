import React from "react";

import HowToVideo from "./HowToVideo";
import infoBackgroundTwo from "../../images/info-background-2.svg";
import CreatorInfo from "./CreatorInfo";

export default function InfoPage() {
  return (
    <div
      className="min-h-screen bg-cover text-cream"
      style={{ backgroundImage: `url(${infoBackgroundTwo})` }}
    >
      <div className="flex flex-col container mx-auto items-center">
        <HowToVideo />
        <CreatorInfo />
      </div>
    </div>
  );
}
