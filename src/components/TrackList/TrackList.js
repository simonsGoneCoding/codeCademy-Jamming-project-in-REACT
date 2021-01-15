import React from "react";
import { Track } from "../Track/Track";
import "./TrackList.css";

export const TrackList = () => {
  return (
    <div className="TrackList">
      <Track />
      <Track />
      <Track />
    </div>
  );
};
