import React, { Component } from "react";
import Square from "../Square/Square";
import Label from "../Label/Label";

class Card extends Component {
  state = {};
  render() {
    const cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      margin: "0 auto",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 5px #666"
    };
    return (
      <div style={cardStyle}>
        <Square color={this.props.color} />
        <Label color={this.props.color} />
      </div>
    );
  }
}

export default Card;
