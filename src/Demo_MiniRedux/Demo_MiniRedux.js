import React, { Component } from "react";
import { connect } from "react-redux";
import { GIAM, TANG } from "./redux/constant/numberConstant";

class Demo_MiniRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="text-center">
        <button
          onClick={() => {
            this.props.handleGiam(5);
          }}
          className="btn btn-danger"
        >
          -
        </button>
        <strong className="mx-3">{this.props.amount}</strong>
        <button onClick={this.props.handleTang} className="btn btn-warning">
          +
        </button>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    amount: state.numberReducer.soLuong,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleTang: () => {
      dispatch({
        type: TANG,
        payload: 1,
      });
    },
    handleGiam: (number) => {
      let action = {
        type: GIAM,
        payload: number,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo_MiniRedux);
