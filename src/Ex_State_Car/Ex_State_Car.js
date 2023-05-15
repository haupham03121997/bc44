import React, { Component } from "react";

export default class Ex_State_Car extends Component {
  state = {
    url: "./img/CarBasic/products/black-car.jpg",
  };
  handleChangeColor = (color) => {
    this.setState({
      url: `./img/CarBasic/products/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="row">
        {/* luôn dẫn từ index.html */}
        <img className="col-4" src={this.state.url} alt="" />
        <div>
          {" "}
          <button
            onClick={() => {
              this.handleChangeColor("red");
            }}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => {
              this.handleChangeColor("black");
            }}
            className="btn btn-dark mx-5"
          >
            Black
          </button>
        </div>
      </div>
    );
  }
}
