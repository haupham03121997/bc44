import React, { Component } from "react";
import { connect } from "react-redux";

class DetailShoe extends Component {
  render() {
    let { name, price, description, quantity } = this.props.detail;
    return (
      <div className="container ">
        <h2>Detail</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Stock</th>
              {/* so luong sp dang có trong kho hang */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{name}</td>
              <td> {price}</td>
              <td>{description}</td>
              <td>{quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    detail: state.shoeReducer.detailShoe,
  };
};

export default connect(mapStateToProps)(DetailShoe);
// b4tabledefault
