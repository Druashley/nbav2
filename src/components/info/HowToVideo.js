import React from "react";

export default function HowToVideo() {
  return (
    <div>
      <div className="text-center text-3xl pt-12">Video explanation </div>
      <iframe
        width="560"
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
