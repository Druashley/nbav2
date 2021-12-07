import React from "react";

export default function HowToVideo() {
  const youtubeVideowidth = () => {
    const { innerWidth: width } = window;
    if (width > 1000) {
      return 560;
    } else {
      return 300;
    }
  };
  return (
    <div className="">
      <div className="text-center text-3xl pt-12">Video explanation </div>
      <iframe
        width={youtubeVideowidth()}
        height="315"
        src="https://www.youtube.com/embed/ELSVVdVIR34"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
