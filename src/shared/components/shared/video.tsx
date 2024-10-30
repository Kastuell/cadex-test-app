"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export const Video = () => {
  return <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />;
};
