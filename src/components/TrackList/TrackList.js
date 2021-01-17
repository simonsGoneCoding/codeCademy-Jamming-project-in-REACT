import React from "react";
import { Track } from "../Track/Track";
import "./TrackList.css";

export class TrackList extends React.Component {
  render() {
    const tracks = this.props.tracks;
    return (
      <div className="TrackList">
        {tracks
          ? tracks.map((track) => (
              <Track
                key={track.id}
                track={track}
                onAdd={this.props.onAdd}
                isRemoval={this.props.isRemoval}
                onRemove={this.props.onRemove}
              />
            ))
          : null}
      </div>
    );
  }
}
