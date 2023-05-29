import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.listShoe.map((item, index) => {
      return (
        <ItemShoe
          handleWatchDetail={this.props.handleViewDetail}
          key={index}
          data={item}
          handleBuyShoe={this.props.handleBuy}
        />
      );
    });
  };
  render() {
    return <div className="row col-6">{this.renderListShoe()}</div>;
  }
}
let mapStateToProps = (state) => {
  return {
    listShoe: state.shoeReducer.shoeArr,
  };
};
export default connect(mapStateToProps)(ListShoe);
