import React, { Component } from "react";
import { movieArr } from "./data";
import ListMovie from "./ListMovie";
import DetailMovie from "./DetailMovie";

export default class Ex_Movie extends Component {
  state = {
    movieArr: movieArr,
    detail: movieArr[0],
  };
  handleChangeDetail = (movie) => {
    // setState ~ bat dong bo
    this.setState({ detail: movie }, () => {
      console.log(this.state.detail);
    });
  };
  render() {
    return (
      <div className="row">
        <ListMovie
          handleChangeDetail={this.handleChangeDetail}
          movieArr={this.state.movieArr}
        />
        <DetailMovie detail={this.state.detail} />
      </div>
    );
  }
}

// redux
