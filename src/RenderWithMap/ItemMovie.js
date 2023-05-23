import React, { Component } from "react";

export default class ItemMovie extends Component {
  render() {
    let movie = this.props.data;
    return (
      <div className="col-3">
        {/* b4cardalign */}
        <div className="card text-left">
          <img
            className="card-img-top "
            src={movie.hinhAnh}
            alt="movie picture"
          />
          <div className="card-body">
            {/* name */}
            <h4 className="card-title">{movie.tenPhim}</h4>
          </div>
        </div>
      </div>
    );
  }
}

// data
