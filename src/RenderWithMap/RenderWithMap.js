import React, { Component } from "react";
import { movieArr } from "./data";
import ItemMovie from "./ItemMovie";

export default class RenderWithMap extends Component {
  renderMovieList = () => {
    return movieArr.map((movie, index) => {
      return <ItemMovie key={index} data={movie} />;
    });
  };
  render() {
    return <div className="row">{this.renderMovieList()}</div>;
  }
}
// key props
