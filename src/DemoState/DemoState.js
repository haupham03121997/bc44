import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    soLuong: 1,
  };
  handleTang = () => {
    this.setState({
      soLuong: this.state.soLuong + 1,
      //   soLuong: this.state.soLuong++,
    });
  };
  handleGiam = () => {
    this.setState({
      soLuong: this.state.soLuong - 1,
    });
  };
  render() {
    return (
      <div>
        <h2
          style={{
            color: "red",
            backgroundColor: "blue",
          }}
        >
          DemoState
        </h2>

        <button onClick={this.handleGiam}>-</button>
        <span>{this.state.soLuong}</span>
        <button onClick={this.handleTang}>+</button>
      </div>
    );
  }
}
