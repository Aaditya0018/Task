import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    const { heading, text } = this.props;

    return (
        <div className="card">
          <div className="round"></div>
          <h2 className="card-heading">{heading}</h2>
          <p className="card-text">{text}</p>
        </div>
    );
  }
}

export default Card;
