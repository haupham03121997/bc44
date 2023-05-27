import React, { Component } from "react";
import ItemMovie from "./ItemMovie";

export default class ListMovie extends Component {
  render() {
    let { movieArr, handleChangeDetail } = this.props;
    return (
      <div className="col-8 row">
        {movieArr.map((item, index) => {
          return (
            <ItemMovie
              handleChangeDetail={this.props.handleChangeDetail}
              movie={item}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
