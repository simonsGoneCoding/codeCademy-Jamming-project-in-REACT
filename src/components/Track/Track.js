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
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>track name will go here</h3>
          <p>track artist will go here | track album will go here </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
