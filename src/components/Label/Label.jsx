import React, { Component } from "react";

class Label extends Component {
  state = {};
  render() {
    const labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };
    return <p style={labelStyle}>{this.props.color}</p>;
  }
}

export default Label;
