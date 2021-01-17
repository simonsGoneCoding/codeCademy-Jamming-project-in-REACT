import React from "react";
import "./Track.css";

export class Track extends React.Component {
  renderAction() {
    this.props.isRemoval ? (
      <button className="Track-action">-</button>
    ) : (
      <button className="Track-action">+</button>
    );
  }

  render() {
    const { name, artist, album } = this.props.track;

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{name}</h3>
          <p>
            {artist} | {album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
  s;
}
