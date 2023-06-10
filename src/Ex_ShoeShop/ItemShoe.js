import React, { Component } from "react";

class ItemShoe extends Component {
  render() {
    let { data, handleWatchDetail, handleBuyShoe } = this.props;
    let { image, name } = data;

    return (
      <div className="col-6 p-4">
        <div class="card text-left h-100 border-danger">
          <img class="card-img-top" src={image} alt="" />
          <div class="card-body">
            <h4 class="card-title">{name}</h4>
          </div>
          <button
            onClick={() => {
              handleWatchDetail(data);
            }}
            className="btn btn-primary"
          >
            Xem
          </button>
          <button
            onClick={() => {
              handleBuyShoe(data);
            }}
            className="btn btn-danger"
          >
            Mua
          </button>
        </div>
      </div>
    );
  }
}
