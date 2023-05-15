import React, { Component } from "react";

export default class EventHandling extends Component {
  handleSayHello = () => {
    console.log("hello user");
  };
  handleSayHelloWithName = (username) => {
    console.log(`hello ${username}`);
  };
  render() {
    return (
      <div>
        <h2>EventHandling</h2>
        {/* ko dùng dấu () */}
        <button onClick={this.handleSayHello} className="btn btn-success">
          Say hello
        </button>
        <br />
        {/* dùng arrow function đối hàm có tham số */}
        <button
          onClick={() => {
            this.handleSayHelloWithName("alice");
          }}
        >
          Say hello with name
        </button>
      </div>
    );
  }
}
