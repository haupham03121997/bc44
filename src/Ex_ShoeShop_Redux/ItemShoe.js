import React, { Component } from "react";
import { connect } from "react-redux";
import { BUY_SHOE, VIEW_DETAIL } from "./redux/constant/shoeConstant";
import { viewDetailAction } from "./redux/action/shoeAction";

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

let mapDispatchToProps = (dispatch) => {
  return {
    handleWatchDetail: (shoe) => {
      dispatch(viewDetailAction(shoe));

      // before : dispatch action
      // now : dispatch function, function return action
    },
    handleBuyShoe: (shoe) => {
      let action = {
        type: BUY_SHOE,
        payload: shoe,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemShoe);
