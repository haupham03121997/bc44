import React, { Component } from "react";

export default class CartShoe extends Component {
  render() {
    let { cart, handleRemove, handleChangeAmount } = this.props;
    return (
      <div className="col-6">
        {/* b4tabledefautl */}
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleChangeAmount(item.id, -1);
                      }}
                      className="btn btn-warning"
                    >
                      -
                    </button>
                    <strong className="mx-3">{item.soLuong}</strong>
                    <button
                      onClick={() => {
                        handleChangeAmount(item.id, +1);
                      }}
                      className="btn btn-success"
                    >
                      +
                    </button>
                  </td>
                  <td>{item.price * item.soLuong}</td>
                  <td>
                    <img style={{ width: 50 }} src={item.image} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
